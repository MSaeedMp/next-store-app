"use client";
import FormContainer from "../form/FormContainer";
import FormInput from "../form/FormInput";
import TextAreaInput from "../form/TextAreaInput";
import { faker } from "@faker-js/faker";
import { SubmitButton } from "../form/Buttons";
import RatingSelect from "./RatingSelect";
import { createReviewAction } from "@/actions/action-review";

const ReviewForm = ({ productId }: { productId: string }) => {
  const title = faker.lorem.sentence();
  const comment = faker.lorem.paragraph();

  return (
    <div className="p-10 border border-stone-200 shadow-sm rounded-sm bg-white">
      <h3 className="text-lg font-semibold pb-6">Tell us about this article</h3>
      <FormContainer
        action={createReviewAction}
        schemaName="reviewSchema"
        closeReview={true}
      >
        <RatingSelect name="rating" label="Rating" />
        <FormInput
          name="title"
          type="text"
          label="Title"
          placeholder="Review title"
          defaultValue={title}
        />
        <TextAreaInput
          name="comment"
          labelText="Feedback"
          defaultValue={comment}
        />
        <FormInput type="hidden" name="productId" value={productId} />
        <SubmitButton className="mt-4" text="Submit review" />
      </FormContainer>
    </div>
  );
};
export default ReviewForm;
