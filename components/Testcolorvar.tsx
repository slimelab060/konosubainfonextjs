export const Testcolorvar = () => {
  return (
    <>
      <div className="my-4 rounded-lg bg-background p-4">カラーテスト</div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg bg-background p-4">background</div>
        <div className="rounded-lg bg-foreground p-4 text-card">foreground</div>
        <div className="rounded-lg bg-card p-4">card</div>
        <div className="rounded-lg bg-card-foreground p-4 text-card">card-foreground</div>
        <div className="rounded-lg bg-popover p-4">popover</div>
        <div className="rounded-lg bg-popover-foreground p-4 text-card">popover-foreground</div>
        <div className="rounded-lg bg-primary p-4 text-card">primary</div>
        <div className="rounded-lg bg-primary-foreground p-4">primary-foreground</div>
        <div className="rounded-lg bg-secondary p-4">secondary</div>
        <div className="rounded-lg bg-secondary-foreground p-4 text-card">secondary-foreground</div>
        <div className="rounded-lg bg-muted p-4">muted</div>
        <div className="rounded-lg bg-muted-foreground p-4">muted-foreground</div>
        <div className="rounded-lg bg-accent p-4">accent</div>
        <div className="rounded-lg bg-accent-foreground p-4 text-card">accent-foreground</div>
        <div className="rounded-lg bg-destructive p-4">destructive</div>
        <div className="rounded-lg bg-destructive-foreground p-4 dark:text-card">destructive-foreground</div>
        <div className="rounded-lg bg-border p-4">border</div>
        <div className="rounded-lg bg-input p-4">input</div>
        <div className="rounded-lg bg-ring p-4 text-white">ring </div>
      </div>
    </>
  );
};
