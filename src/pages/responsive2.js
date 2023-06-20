import { ResponsiveTemplate } from "@poc/components/templates/ResponsiveTemplate";

const childrens = [
  <div className="w-full h-48 bg-red-50"/>,
  <div className="w-full h-48 bg-green-400"/>,
  <div className="w-full h-48 bg-yellow-200"/>,
  <div className="w-full h-48 bg-purple-500"/>,
];

export default function Home() {
  return (
    <ResponsiveTemplate
      childrens={childrens}
      mainChildren={
        <div className="w-full h-96 bg-red-500"/>
      }
      title="Cores"
      footer={<div className="w-[80rem] h-16 bg-blue-500"/>}
      header={<p className="font-bold">Cores</p>}
    />
  );
}
