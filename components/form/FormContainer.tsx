"use client";

import { FormProvider, useForm, FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useToast } from "@/hooks/use-toast";
import schemaFactory, { SchemaKeys } from "@/lib/schema-factory";
import { useRouter } from "next/navigation";
import { emptySchema } from "@/lib/schemas";
import { InvalidateQueryFilters, useQueryClient } from "@tanstack/react-query";
import { ActionResponseType } from "@/utils/types";
import { useReviewsContext } from "@/hooks/useReviewsContext";
import { useSession } from "next-auth/react";

type FormContainerProps<T extends FieldValues> = {
  action: (formData: T) => Promise<ActionResponseType> | undefined;
  children: React.ReactNode;
  schemaName?: SchemaKeys;
  className?: string;
  resetFields?: boolean;
  redirectPath?: string;
  redirectReloadPath?: string;
  validationMode?: "onBlur" | "onChange" | "onSubmit" | "onTouched" | "all";
  invalidateQuery?: string;
  closeSigInModal?: boolean;
  newSession?: boolean;
  closeReview?: boolean;
};

const FormContainer = <T extends FieldValues>({
  action,
  children,
  schemaName,
  className,
  resetFields = false,
  redirectPath,
  redirectReloadPath,
  validationMode = "onChange",
  invalidateQuery,
  newSession = false,
  closeReview = false,
}: FormContainerProps<T>) => {
  const { toast } = useToast();
  const router = useRouter();
  const queryClient = useQueryClient();
  const { update: refreshSession } = useSession();

  const { closeReviewForm } = useReviewsContext();
  const schema = schemaName ? schemaFactory(schemaName) : emptySchema;
  const methods = useForm<T>({
    resolver: zodResolver(schema),
    mode: validationMode, // Client-side validation
  });

  const refresh = async () => {
    await refreshSession();
  };
  const { handleSubmit, reset } = methods;

  const onSubmit = async (formData: T) => {
    const result = await action(formData); // Server-side validation
    console.log(result);
    if (!result || result.status === "success") {
      if (result?.status === "success") {
        // toast({
        //   variant: "success",
        //   title: "Success",
        //   description: result.message,
        // });
        toast({
          description: result.message,
        });
      }

      if (resetFields) reset();
      if (closeReview) closeReviewForm();
      if (newSession) refresh();
      if (redirectPath) router.push(redirectPath);
      if (redirectReloadPath) window.location.assign(redirectReloadPath);
      if (invalidateQuery) {
        console.log("revalidate");
        queryClient.invalidateQueries([
          invalidateQuery,
        ] as InvalidateQueryFilters);
      }
    }
    if (result && result.status === "error") {
      // toast({
      //   variant: "destructive",
      //   title: "Error",
      //   description: result.message,
      // });
      toast({
        description: result.message,
      });
    }
  };

  return (
    <FormProvider {...methods}>
      <form className={className} onSubmit={handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
};

export default FormContainer;
