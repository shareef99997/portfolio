function SectionHeader({ title, icon: Icon }) {
    return (
      <div className="flex gap-2 w-max h-max items-center py-2 px-4 rounded-full border-solid border border-border">
        <Icon />
        <h1 className="text-text text-description">{title}</h1>
      </div>
    );
}

export default SectionHeader;