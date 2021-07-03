import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

const Faq = () => {
  return (
    <section className="faq-area pt-100" id="faq">
      <div className="container">
        <div className="section-title">
          <span>PREGUNTAS</span>
          <h2>PREGUNTAS FRECUENTES</h2>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-8">
            <div className="faq-accordion">
              <Accordion allowZeroExpanded preExpanded={["a"]}>
                <AccordionItem uuid="a">
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      ¿QUE ES TSIFACTUR?
                    </AccordionItemButton>
                  </AccordionItemHeading>

                  <AccordionItemPanel>
                    <p>
                      Es una plataforma desarrollada para la emisión y recepción
                      de documentos con tecnología de punta, la misma que cumple
                      con todos los requisitos planteados por la SUNAT y le
                      genera valor agregado al proceso de facturación.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem uuid="b">
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      ¿ES FACIL DE USAR?
                    </AccordionItemButton>
                  </AccordionItemHeading>

                  <AccordionItemPanel>
                    <p>
                      El software es totalmente intuitivo y además tiene un paso
                      a paso que le indicara como configurarlo para su negocio.
                      Contamos con videos explicativos que le servirán de guía
                      para la utilización. Por ultimo a través del departamento
                      soporte podemos capacitarlo en la utilización de la
                      solución. Si usted necesita una capacitación más
                      personalizada y presencial podrá consultar los costos a
                      través del departamento de soporte técnico.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem uuid="c">
                  <AccordionItemHeading>
                    <AccordionItemButton>¿QUE ES XML?</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      XML, es el formato que SUNAT a instaurado para la emisión
                      de documentos electrónicos, sus siglas en inglés de
                      Extensible Markup Language, traducido como "Lenguaje de
                      Marcado Extensible" o "Lenguaje de Marcas Extensible", es
                      un meta-lenguaje que permite definir lenguajes de marcas
                      desarrollado por el World Wide Web Consortium (W3C)
                      utilizado para almacenar datos en forma legible.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem uuid="d">
                  <AccordionItemHeading>
                    <AccordionItemButton>¿QUE ES PDF?</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      PDF, es el formato que SUNAT a instaurado para la
                      representación gráfica de los documentos electrónicos, sus
                      siglas del inglés Portable Document Format, "formato de
                      documento portátil" es un formato de almacenamiento para
                      documentos digitales independiente de plataformas de
                      software o hardware. Este formato es de tipo compuesto
                      (imagen vectorial, mapa de bits y texto).
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem uuid="e">
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      ¿QUE ES OSE Y PSE?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Es un Proveedor de Servicios Electrónicos (PSE), presta
                      servicios al emisor electrónico, para la realización de
                      alguna o todas las actividades inherentes a la modalidad
                      de emisión electrónica de comprobantes de pago, en nombre
                      del emisor. Somos proveedores Autorizados
                    </p>

                    <p>
                      El Operador de Servicios Electrónicos (OSE) es quién se
                      encarga de comprobar informáticamente el cumplimiento de
                      los aspectos esenciales para que se considere emitido el
                      documento electrónico que sirve de soporte a los
                      comprobantes de pago electrónicos y a cualquier otro
                      documento que se emita.
                    </p>

                    <p>
                      El operador no sólo validará la correcta emisión de un
                      comprobante de pago electrónico sino también enviará la
                      información de los comprobantes de pago validados, con sus
                      constancias respectivas, así como de los documentos
                      relacionados a la SUNAT.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="faq-img">
              <img src="/images/faq-img.png" alt="Image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
