
export const  OrganizeTemplate = ({title, rightChildren, leftChildren, footer}) => (
 <div className="p-16 flex flex-col gap-6">
    <h1 className="font-bold text-3xl">{title}</h1>
    <div className="flex justify-between">
        <div className="w-1/2">{leftChildren}</div>
        <div className="w-1/2">{rightChildren}</div>
    </div>
    <div className="fixed bottom-0">
        {footer}
    </div>
 </div>
);
