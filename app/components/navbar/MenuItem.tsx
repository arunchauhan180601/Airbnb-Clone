"use client";

interface MenuItemProps {
  onClick: () => void;
  label: string;
}


const MenuItem: React.FC<MenuItemProps> = ({
  onClick,
  label
}) => {
  return (
    <>
      <div>
        <div onClick={onClick} className="px-4 py-3 hover:bg-neutral-100 transition font font-semibold">
          {label}
        </div>
      </div>
    </>
  )
}

export default MenuItem;