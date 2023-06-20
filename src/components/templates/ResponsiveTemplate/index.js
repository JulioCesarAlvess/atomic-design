export const ResponsiveTemplate = ({
  title,
  mainChildren,
  childrens,
  footer,
  header,
}) => (
  <div className="p-16 flex flex-col gap-6 sm:px-0 md:px-4 lg:px-10 xl:px-80">
    <div>{header}</div>
    <h1 className="font-bold text-3xl">{title}</h1>
    <div className="flex justify-between md:flex-col lg:flex-row sm:flex-col md:items-center">
      <div className="w-1/2 flex items-center justify-center p-2">
        {mainChildren}
      </div>
      <div className="w-1/2 flex flex-wrap md:flex-row sm:flex-col">
        {childrens.map((item, index) => (
          <div key={index} className="flex items-center justify-center w-1/2 p-2">{item}</div>
        ))}
      </div>
    </div>
    <div className="fixed bottom-0">{footer}</div>
  </div>
);
