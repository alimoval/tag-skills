type Employee = {
   id: number,
   name: string,
   position: string,
   typeOfProject: string,
   availability: string,
   office: string,
   imgSrc: string,
   skillIcon: string,
   warning: boolean,
   skills: Array<{
       name: string
   }>,
};

type Filter = {
    name: string,
    duration: number
};