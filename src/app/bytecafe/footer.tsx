export const BCFooter = () => {
  return (
    <div className="flex flex-row justify-center items-center bg-bc-black w-full h-[10rem] gap-8 lg:gap-[10rem]">
      <div>
        <img
          className="h-[7rem] hidden md:block"
          src="logo/usp_branca.png"
          alt="Logo 1"
        />
      </div>
      <div>
        <img className="h-[5rem]" src="logo/projeto_symcomp.png" alt="Logo 2" />
      </div>
      <div>
        <img
          className="h-[6rem] hidden md:block"
          src="logo/ime_branca.png"
          alt="Logo 3"
        />
      </div>
    </div>
  )
}
