import { Loader } from "@/components/ui/loader";
import { Button } from "@/components/ui/button";


const LoadingExample = () => {
  return (
    <div className="space-y-6 p-6">
      <h2 className="text-2xl font-bold">Standardized Loaders</h2>
      
      {/* Different sizes */}
      <div className="flex items-center gap-4">
        <div className="text-center">
          <Loader size="sm" />
          <p className="text-sm mt-2">Small</p>
        </div>
        <div className="text-center">
          <Loader size="md" />
          <p className="text-sm mt-2">Medium</p>
        </div>
        <div className="text-center">
          <Loader size="lg" />
          <p className="text-sm mt-2">Large</p>
        </div>
      </div>

      {/* In buttons */}
      <div className="flex gap-4">
        <Button disabled>
          <Loader size="sm" className="mr-2" />
          Processing...
        </Button>
        <Button disabled>
          <Loader size="sm" className="mr-2" />
        </Button>
      </div>

      {/* Centered in container */}
      <div className="h-32 bg-card rounded-lg flex items-center justify-center">
        <Loader size="lg" />
      </div>
    </div>
  );
};

export default LoadingExample;