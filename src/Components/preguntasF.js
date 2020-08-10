import React from "react";
import Faq from "../Components/Faq";

function FaqSection(props) {
  return (
      <div className="container">

        <Faq
          items={[
            {
              question: "En que tiempo puedo tener mi página?",
              answer:
                "Normalmente se necesitan menos de 10 días desde la contratación del servicio. Este tiempo depende de distintos factores como, por ejemplo, el Logo corporativo, cantidad de productos o servicios a publicar y toda la información de su empresa a publicar en línea.",
            },
            {
              question: "Hacen actualizaciones de sitios existentes?",
              answer:
                "Claro! Nos agrada hacer cambios a sitios existentes y sobre todo poder migrarlos a la nube o actualizarlos a nivel seguridad.",
            },
            {
              question:
                "Luego de entregada la pagina, podré actualizar mis productos?",
              answer:
                "Así es, te damos las herramientas para que gestiones tu sitio de manera ordenada, podrás actualizar precios, iventario y cargar nuevos productos y servicios.",
            },
            {
              question: "Trabajan con procesadores de Pago?",
              answer:
                "Trabajamos con la mayoría de plataforma de pagos existentes, siempre y cuando éstas puedan integrarse a la página.",
            },
            {
              question: "La página usará mi nombre de dominio @miempresa.com?",
              answer:
                "Así es, si ya tienes un dominio, nos encargamos de conectarlo con los servicios de la página. Si no tienes uno, no te preocupes, te buscamos uno que te guste.",
            },
          ]}
        ></Faq>
      </div>

  );
}

export default FaqSection;
