export function Option({
    value,
    className,
    children,
  }: {
    value:string;
    className?: string;
    children: any;
  
  }) {
    return (

        <option className={className} value={value}>
          {children}
        </option>


    );
  }