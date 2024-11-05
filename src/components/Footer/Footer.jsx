import { Typography } from "@material-tailwind/react";

export function FooterWithLogo() {
  return (
    <footer className="w-full bg-white p-8">
      <div className="flex flex-wrap items-center justify-center gap-y-6 gap-x-12 md:justify-between">
        <img 
          src="/futbol.png" 
          alt="Descripción de la imagen"
          className="w-10" 
        />

        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Red social
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Soporte técnico
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="https://youtu.be/GRRMOEJeCO4" 
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
              target="_blank" 
              rel="noopener noreferrer" 
            >
              Recursos adicionales
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray-800"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contacto
            </Typography>
          </li>
        </ul>
      </div>

      {
        
      }
      <hr className="my-8 border-blue-gray-50" />

      {

      }
      <Typography color="blue-gray-800" className="text-center font-normal">
        &copy; {new Date().getFullYear()} Matias Bahamonde 
      </Typography>
    </footer>
  );
}

export default FooterWithLogo;
