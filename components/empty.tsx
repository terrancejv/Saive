import Image from "next/image";

interface EmptyProps {
  label: string;
}

export const Empty = ({
  label
}: EmptyProps) => {
  return (
    <div className="h-full p-20 flex flex-col items-center justify-center">
      <div className="relative h-72 w-72">
        <Image
          alt="Empty"
          fill
          src="/empty.png"
          /* <a href="https://www.flaticon.com/free-icons/no-money" title="no-money icons">No-money icons created by Chattapat - Flaticon</a> */
        />
      </div>
      <p className="text-muted-foreground text-sm text-center">

      </p>
    </div>
  )
}