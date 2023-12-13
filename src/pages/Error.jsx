import { Link } from "react-router-dom";


const Error = () => {

  

   return ( 
  
    
      <main className=" bg-amber-100 grid min-h-[100vh] place-items-center px-7 pt-4">
        <div className="text-center"> 
      
       <p className="text-5xl font-semibold text-slate-600"> 4 0 4</p>
       <h1 className="mt-4 text-3xl font-bold tracking-tighter sm:text-4xl leading-6"> Sorry, Page not found </h1>
       <div className="mt-8">
       <Link to="/" className="btn btn-secondry " > Go Back Home </Link>
        </div>

       </div>
      </main> 
      
   )
      };
    

    

        export default Error;