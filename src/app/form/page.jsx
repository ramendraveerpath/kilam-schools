import FormPage from "@/components/FormPage";
import ErrorBoundary from "@/components/ErrorBoundary";

export default function Form() {
  return (
    <ErrorBoundary>
      <FormPage />
    </ErrorBoundary>
  );
}
