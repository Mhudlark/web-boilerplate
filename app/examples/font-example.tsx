export default function FontExample() {
  return (
    <div className="flex flex-col gap-4 rounded-md border p-6 shadow-sm">
      <h3 className="text-2xl font-semibold">Font Example</h3>

      <div className="bg-muted/40 mb-4 rounded-md p-4">
        <h4 className="mb-2">Automatic Heading Font Example</h4>
        <p className="text-muted-foreground mb-4 text-sm">
          These heading elements automatically use the heading font without
          needing an explicit class:
        </p>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          <h1 className="text-2xl">h1 Heading</h1>
          <h2 className="text-xl">h2 Heading</h2>
          <h3 className="text-lg">h3 Heading</h3>
          <h4 className="text-base">h4 Heading</h4>
          <h5 className="text-sm">h5 Heading</h5>
          <h6 className="text-xs">h6 Heading</h6>
        </div>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <h4 className="text-muted-foreground text-lg font-medium">
            Heading Font Weights
          </h4>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="space-y-2">
              <div className="font-heading font-normal">
                Normal weight (400)
              </div>
              <div className="font-heading font-medium">
                Medium weight (500)
              </div>
              <div className="font-heading font-semibold">
                Semibold weight (600)
              </div>
              <div className="font-heading font-bold">Bold weight (700)</div>
            </div>
            <div className="space-y-1">
              <h5 className="text-xl font-bold">Heading L</h5>
              <h5 className="text-lg font-semibold">Heading M</h5>
              <h5 className="text-base font-medium">Heading S</h5>
              <h5 className="text-sm font-normal">Heading XS</h5>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="text-muted-foreground text-lg font-medium">
            Body Font (Inter)
          </h4>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="space-y-2">
              <p className="text-base">
                This is regular body text in Inter. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit.
              </p>
              <p className="text-muted-foreground text-sm">
                This is small body text. Sed do eiusmod tempor incididunt ut
                labore.
              </p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold">This is semibold body text</p>
              <p className="font-medium">This is medium body text</p>
              <p className="italic">This is italic body text</p>
              <p className="font-mono text-sm">This is monospace text</p>
            </div>
          </div>
        </div>

        <div className="bg-muted rounded-md p-4">
          <h4 className="text-lg font-bold">Typography Comparison</h4>
          <div className="mt-2 flex flex-col gap-2">
            <div className="flex items-baseline gap-4">
              <span className="text-sm font-medium">Heading:</span>
              <span className="font-heading">
                The quick brown fox jumps over the lazy dog
              </span>
            </div>
            <div className="flex items-baseline gap-4">
              <span className="text-sm font-medium">Body:</span>
              <span>The quick brown fox jumps over the lazy dog</span>
            </div>
            <div className="flex items-baseline gap-4">
              <span className="text-sm font-medium">Mono:</span>
              <span className="font-mono">
                The quick brown fox jumps over the lazy dog
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
