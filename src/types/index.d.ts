type Employee = {
   id: number,
   name: string,
   position: string,
   office: string,
   imgSrc: string,
   skillIcon: string,
   warning: boolean,
   skills: Array<{
       name: string
   }>,
}

type Language = {
    name: string,
    duration: number
}