function SideBar(props) {
  console.log("SideBar");
  

  const sectionClick = (sectionKey) => () => {
    props.setSection(props.sections[sectionKey]);
    localStorage.setItem("section", props.sections[sectionKey]);
  }

  /** @type {Array<HTMLElement>} */
  let sections = [];
  for (const key in props.sections) {
    sections.push((
      <div onClick={sectionClick(key)} class="cursor-pointer hover:bg-we-blue-900">
        <h2>{key}</h2>
      </div>
    ));
  }

  return (
    <div class="fixed top-[115px] left-0 h-screen w-40 bg-we-blue-950 text-white outline outline-we-blue-600">
      <h1>Side Bar</h1>
      <div class="grid grid-flow-row gap-1">
        {sections}
      </div>
    </div>
  );
}

export default SideBar;