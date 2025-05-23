import Image from 'next/image'

export const BCFooter = () => {
  return (
    <div className="flex flex-row justify-center items-center bg-bc-black w-full h-[10rem] gap-8 lg:gap-[10rem]">
      <div>
        <Image
          width={100}
          height={100}
          className="w-[100px] hidden md:block"
          src="/logo/usp_branca.png"
          alt="Logo 1"
        />
      </div>
      <div>
        <Image
          width={250}
          height={250}
          className="w-[250px]"
          src="/logo/projeto_symcomp.png"
          alt="Logo 2"
        />
      </div>
      <div>
        <Image
          width={50}
          height={50}
          className="w-[50px] hidden md:block"
          src="/logo/ime_branca.png"
          alt="Logo 3"
        />
      </div>
    </div>
  )
}
