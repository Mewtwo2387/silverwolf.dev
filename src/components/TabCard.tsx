interface TabCardProps {
  title: string;
  subtitle: string;
  onClick: () => void;
  leftImage?: string;
  rightImage?: string;
}

export default function TabCard({ title, subtitle, onClick, leftImage, rightImage }: TabCardProps) {
  return (
    <div className="mx-[5%] mb-4 rounded-lg border-[3px] border-gray-500 border-solid
                   hover:border-blue-500 transition-all cursor-pointer bg-black/70"
         onClick={onClick}>
      <table className="w-full mt-3 mx-2">
        <tbody>
          <tr>
            {leftImage && (
              <td className="w-1/10">
                <img src={leftImage} className="h-24 block mx-auto" />
              </td>
            )}
            <td className="w-8/10 px-4">
              <h2 className="text-2xl">{title}</h2>
              <h3 className="text-[#bbbbbb] text-lg">{subtitle}</h3>
            </td>
            {rightImage && (
              <td className="w-1/10">
                <img src={rightImage} className="h-24 block mx-auto" />
              </td>
            )}
          </tr>
        </tbody>
      </table>
    </div>
  )
}