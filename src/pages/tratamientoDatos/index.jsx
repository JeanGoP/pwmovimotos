import React, { useContext } from "react";
import "./tratamientoDatos.css"
import { LanguageContext } from '../../context/context';
import { useEffect } from "react";

export function TratamientoDatos() {
    const { configuracionData = {} } = useContext(LanguageContext);
    const { empresa } = useContext(LanguageContext);
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);
    const url_logo = '/images/Logomovimotos.png'

    return (
        <div style={{ paddingTop: '10px' }}>
            <div className="container">
                <div className="row row__Posventa">
                    <div className="col-lg-4 col-md-4 col-sm-12 div__row__TratamientoDato" style={{ border: 'solid 1px', borderColor: '#000' }}>
                        <img src={url_logo} alt="" height="100" className="me-5" />
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 div__row__TratamientoDato" style={{ border: 'solid 1px', borderColor: '#000' }}>
                        <p className="p_tituloTratamiento" >GESTIÓN DE RIESGO</p>
                        <hr style={{ borderTop: '2px solid #000' }} />
                        <p className="p_tituloTratamiento" >MANUAL DE TRATAMIENTO DE DATOS</p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 div__row__TratamientoDato" style={{ border: 'solid 1px', borderColor: '#000' }}>
                        <p className="p_tituloTratamiento" >Código:</p>
                        <hr style={{ borderTop: '2px solid #000' }} />
                        <p className="p_tituloTratamiento" >Versión: V01</p>
                        <hr style={{ borderTop: '2px solid #000' }} />
                        <p className="p_tituloTratamiento" >Vigencia: 2023-08-31</p>
                    </div>
                </div>



                <div className="row tratamiento-datos">

                <header className="doc-header">
                    <div className="container">
                
                    <div className="text-center">
                        <h1 className="doc-header__title">
                        MANUAL INTERNO TRATAMIENTO DE DATOS PERSONALES<br />
                        DISTRIMOTOS DE COLOMBIA S.A.S
                        </h1>
                    </div>
                    </div>
                </header>
                    <main className="doc-main">
                        <div className="container">

                            <section className="doc-chapter" id="capitulo-i">
                                <h2 className="doc-chapter__heading">CAPÍTULO I</h2>


                                <article className="doc-section" id="sec-1">
                                    <h3 className="doc-section__number-title">
                                        <span className="doc-section__number">1.</span>
                                        ASPECTOS GENERALES
                                    </h3>
                                    <p className="doc-section__body">
                                        Por medio del presente manual, se da cumplimiento a lo establecido en el literal k del artículo 17 de
                                        la Ley 1581 de 2012, que regula los deberes a los que están sometidos los responsables del
                                        tratamiento de los datos personales, dentro de las cuales se ordena adoptar un manual interno
                                        de políticas y procedimientos para garantizar el adecuado cumplimiento de mencionada ley y en
                                        especial para la atención de consultas y reclamos.
                                    </p>
                                </article>


                                <article className="doc-section" id="sec-2">
                                    <h3 className="doc-section__number-title">
                                        <span className="doc-section__number">2.</span>
                                        MARCO JURÍDICO
                                    </h3>
                                    <p className="doc-section__body">
                                        El presente documento ha sido redactado e inspirado en el respeto de lo establecido en la Ley 1581
                                        de 2012, el Decreto 1377 de 2013 y la Sentencia C - 748 de 2011, su interpretación ha de ser
                                        basada en los referidos elementos normativos y en criterios de autonomía y buena fe.
                                    </p>
                                </article>


                                <article className="doc-section" id="sec-3">
                                    <h3 className="doc-section__number-title">
                                        <span className="doc-section__number">3.</span>
                                        APLICACIÓN POLÍTICA PROTECCIÓN DE DATOS PERSONALES
                                    </h3>
                                    <p className="doc-section__body">
                                        <strong>DISTRIMOTOS DE COLOMBIA S.A.S</strong>, en calidad de responsable de la información recolectada de
                                        sus aspirantes, empleados, proveedores, contratistas, socios, clientes y demás, en todo lo
                                        dispuesto en materia de protección de datos personales dará cumplimiento a la Ley 1581 de 2012,
                                        Decreto 1377 de 2013 y en general a lo establecido en la Política de Protección de Datos
                                        Personales de <strong>DISTRIMOTOS DE COLOMBIA S.A.S</strong>, podrá consultarse en el archivo físico de la
                                        compañía ubicado en la dirección CL 11 24 51, Sogamoso.
                                    </p>
                                </article>


                                <article className="doc-section" id="sec-4">
                                    <h3 className="doc-section__number-title">
                                        <span className="doc-section__number">4.</span>
                                        OBJETIVO
                                    </h3>
                                    <p className="doc-section__body">
                                        El presente documento tiene como objetivo establecer las políticas por parte de la <strong>DISTRIMOTOS
                                            DE COLOMBIA S.A.S</strong> para el tratamiento de los datos personales de todos sus clientes activos y
                                        potenciales, usuarios, empleados, candidatos a empleados y proveedores, en el desarrollo de su
                                        objeto social y conforme a la ley y la Constitución Nacional que de una u otra forma tengan acceso
                                        a la información personal consignada en las distintas bases de datos de la compañía.
                                    </p>
                                </article>


                                <article className="doc-section" id="sec-5">
                                    <h3 className="doc-section__number-title">
                                        <span className="doc-section__number">5.</span>
                                        IDENTIFICACIÓN DEL RESPONSABLE DE TRATAMIENTO DE DATOS PERSONALES
                                    </h3>
                                    <dl className="doc-contact-info">
                                        <div className="doc-contact-info__item row">
                                            <dt className="doc-contact-info__label col-sm-4">Dirección domicilio principal:</dt>
                                            <dd className="doc-contact-info__value col-sm-8">CL 11 24 51, Sogamoso</dd>
                                        </div>
                                        <div className="doc-contact-info__item row">
                                            <dt className="doc-contact-info__label col-sm-4">Teléfono:</dt>
                                            <dd className="doc-contact-info__value col-sm-8">3135733532</dd>
                                        </div>
                                        <div className="doc-contact-info__item row">
                                            <dt className="doc-contact-info__label col-sm-4">Correo electrónico:</dt>
                                            <dd className="doc-contact-info__value col-sm-8">
                                                <a href="mailto:facturas@movimotos.com">facturas@movimotos.com</a>
                                            </dd>
                                        </div>
                                    </dl>
                                </article>


                                <article className="doc-section" id="sec-6">
                                    <h3 className="doc-section__number-title">
                                        <span className="doc-section__number">6.</span>
                                        DEFINICIONES
                                    </h3>
                                    <ul className="doc-definition-list">
                                        <li className="doc-definition-list__item">
                                            <strong>Autorización:</strong> consentimiento previo, expreso e informado del Titular para llevar a cabo
                                            el Tratamiento de datos personales.
                                        </li>
                                        <li className="doc-definition-list__item">
                                            <strong>Base de Datos:</strong> conjunto organizado de datos personales que sea objeto de Tratamiento.
                                        </li>
                                        <li className="doc-definition-list__item">
                                            <strong>Dato Personal:</strong> cualquier información vinculada o que pueda asociarse a una o varias
                                            personas naturales determinadas o determinables.
                                        </li>
                                        <li className="doc-definition-list__item">
                                            <strong>Encargado del Tratamiento:</strong> persona natural o jurídica, pública o privada, que por sí
                                            misma o en asocio con otros, realice el Tratamiento de datos personales por cuenta del
                                            responsable del Tratamiento.
                                        </li>
                                        <li className="doc-definition-list__item">
                                            <strong>Responsable Del Tratamiento:</strong> persona natural o jurídica, pública o privada, que por sí
                                            misma o en asocio con otros, decida sobre la base de datos y/o el Tratamiento de los datos.
                                        </li>
                                        <li className="doc-definition-list__item">
                                            <strong>Titular:</strong> persona natural cuyos datos personales sean objeto de Tratamiento.
                                        </li>
                                        <li className="doc-definition-list__item">
                                            <strong>Tratamiento:</strong> cualquier operación o conjunto de operaciones sobre datos personales,
                                            tales como la recolección, almacenamiento, uso, circulación o supresión.
                                        </li>
                                        <li className="doc-definition-list__item">
                                            <strong>Dato Personal Público:</strong> son aquellos datos personales que las normas y la Constitución
                                            han determinado expresamente como públicos y, para cuya recolección y tratamiento, no es
                                            necesaria la autorización del titular de la información. (Ej. Dirección, teléfono, datos contenidos en
                                            sentencias judiciales ejecutoriadas que no estén sometidas a reserva, datos sobre el estado civil de
                                            las personas, entre otros).
                                        </li>
                                        <li className="doc-definition-list__item">
                                            <strong>Dato Personal Semiprivado:</strong> son datos que no tienen una naturaleza íntima, reservada,
                                            ni pública y cuyo conocimiento o divulgación puede interesar no solo a su titular, sino a un grupo de
                                            personas o a la sociedad en general. Para su tratamiento se requiere la autorización expresa del
                                            titular de la información. (Ej. Dato financiero y crediticio).
                                        </li>
                                        <li className="doc-definition-list__item">
                                            <strong>Dato Personal Privado:</strong> es un dato personal que por su naturaleza íntima o reservada
                                            solo interesa a su titular y para su tratamiento requiere de su autorización expresa. (Ej. Nivel de
                                            escolaridad, gustos o preferencias de las personas).
                                        </li>
                                        <li className="doc-definition-list__item">
                                            <strong>Dato Personal Sensible:</strong> es aquel dato personal de especial protección, por cuanto
                                            afecta la intimidad del titular y su tratamiento puede generar discriminación. NO puede ser objeto de
                                            tratamiento a menos que sea requerido para salvaguardar un interés vital del titular o este se
                                            encuentre incapacitado y su obtención haya sido autorizada expresamente. (Ej. Origen racial o
                                            étnico, orientación política, convicciones religiosas o filosóficas, la pertenencia a sindicatos,
                                            organizaciones sociales, de derechos humanos, datos biométricos, relativos a la salud).
                                        </li>
                                        <li className="doc-definition-list__item">
                                            <strong>Transferencia:</strong> se trata de la operación que realiza el responsable Del Tratamiento,
                                            cuando envía la información a otro receptor, que, a su vez, se convierte en responsable del
                                            tratamiento de esos datos.
                                        </li>
                                    </ul>
                                </article>


                                <article className="doc-section" id="sec-7">
                                    <h3 className="doc-section__number-title">
                                        <span className="doc-section__number">7.</span>
                                        VIGENCIA
                                    </h3>
                                    <p className="doc-section__body">
                                        La presente Política para el Tratamiento de Datos Personales rige a partir del 16 de diciembre de
                                        2021.
                                    </p>
                                    <p className="doc-section__body">
                                        Las bases de datos en las que se registran los datos personales tendrán una vigencia igual al
                                        tiempo en que se mantenga y utilice la información para las finalidades descritas en esta política.
                                        Una vez se cumpla(n) esa(s) finalidad(es) y siempre que no exista un deber legal o contractual de
                                        conservar su información, se suspenderá el uso de los datos.
                                    </p>
                                </article>

                            </section>
                            <section className="doc-chapter" id="capitulo-ii">
                                <h2 className="doc-chapter__heading">CAPÍTULO II</h2>


                                <article className="doc-section" id="sec-cap2-1">
                                    <h3 className="doc-section__number-title">
                                        <span className="doc-section__number">1.</span>
                                        DISPOSICIONES ESPECIALES
                                    </h3>


                                    <article className="doc-subsection" id="sec-cap2-1-1">
                                        <h4 className="doc-subsection__title">
                                            1.1. DEBERES DE DISTRIMOTOS DE COLOMBIA S.A.S RESPONSABLE DEL
                                            TRATAMIENTO DE DATOS PERSONALES
                                        </h4>
                                        <p className="doc-subsection__body">
                                            De acuerdo con las definiciones legales y propias de esta política empresarial interna de tratamiento
                                            de datos, <strong>DISTRIMOTOS DE COLOMBIA S.A.S</strong>, actuará como responsable del tratamiento de
                                            datos personales y cumplirá con los deberes establecidos en el artículo 17 de la Ley 1581 de 2012.
                                        </p>
                                    </article>


                                    <article className="doc-subsection" id="sec-cap2-1-2">
                                        <h4 className="doc-subsection__title">
                                            1.2. DEBERES DE LOS FUNCIONARIOS DESIGNADOS PARA EL TRATAMIENTO DE LA
                                            INFORMACIÓN
                                        </h4>
                                        <p className="doc-subsection__body">
                                            Los empleados o funcionarios encargados para el tratamiento de datos asumirán su responsabilidad
                                            como tales y tendrán como obligaciones principales:
                                        </p>
                                        <ul className="doc-bullet-list">
                                            <li>
                                                Garantizar al titular, de manera permanente, el pleno y efectivo ejercicio del derecho de
                                                Hábeas Data; entendiendo por este el derecho a conocer, actualizar y rectificar la información que
                                                sobre él reposa en las bases de datos personales que son administradas por el encargado de
                                                tratamiento,
                                            </li>
                                            <li>
                                                Conservar la información bajo las condiciones de seguridad necesarias para impedir su
                                                adulteración, pérdida, consulta, uso o acceso no autorizado o fraudulento,
                                            </li>
                                            <li>
                                                Realizar oportunamente la actualización, rectificación o supresión de los datos en los
                                                términos de la ley,
                                            </li>
                                            <li>
                                                Actualizar la información reportada por los responsables del tratamiento dentro de los
                                                cinco (5) días hábiles contados a partir de su recibo,
                                            </li>
                                            <li>
                                                Tramitar las consultas y los reclamos formulados por los titulares en los términos
                                                señalados en la ley,
                                            </li>
                                            <li>
                                                Registrar en la base de datos las leyendas <em>"reclamo en trámite"</em> en la forma en que se
                                                regula en la ley,
                                            </li>
                                            <li>
                                                Insertar en la base de datos las leyendas <em>"información en discusión judicial"</em> una vez
                                                notificado por parte de la autoridad competente sobre procesos judiciales relacionados con la
                                                calidad del dato personal,
                                            </li>
                                            <li>
                                                Abstenerse de circular información que esté siendo controvertida por el titular y cuyo
                                                bloqueo haya sido ordenado por la Superintendencia de Industria y Comercio,
                                            </li>
                                            <li>
                                                Permitir el acceso a la información únicamente a las personas que pueden tener acceso a
                                                ella,
                                            </li>
                                            <li>
                                                Informar a la Superintendencia de Industria y Comercio cuando se le presenten
                                                violaciones a los códigos de seguridad y existan riesgos en la administración de la información de
                                                los titulares,
                                            </li>
                                            <li>
                                                Cumplir las instrucciones y requerimientos que imparta la Superintendencia de Industria y
                                                Comercio.
                                            </li>
                                        </ul>

                                        <h5 className="doc-subsection__subtitle">Deberes de seguridad:</h5>
                                        <ul className="doc-bullet-list doc-bullet-list--security">
                                            <li>
                                                Cuando el funcionario se ausente de su lugar de trabajo, debe bloquear su estación de
                                                trabajo y debe guardar en un lugar seguro y bajo llave cualquier medio magnético removible que
                                                contenga información sensible,
                                            </li>
                                            <li>
                                                Al momento de finalizar la jornada de trabajo, el funcionario debe guardar en un lugar
                                                seguro y bajo llave los medios que contengan información sensible de <strong>DISTRIMOTOS DE
                                                    COLOMBIA S.A.S</strong>, a la que tenga acceso,
                                            </li>
                                            <li>
                                                En caso que sea necesario imprimir algún documento que contenga información clasificada
                                                o sensible, se debe retirar inmediatamente de la impresora y asegurarse que no haya quedado
                                                nada en cola de impresión,
                                            </li>
                                            <li>
                                                Obligación de notificar al área administrativa o a la persona encargada de la parte de
                                                informática sobre cualquier incidente de seguridad relacionado con el puesto de trabajo, en
                                                especial de:
                                                <ul className="doc-bullet-list doc-bullet-list--nested">
                                                    <li>Alerta de virus generadas por el antivirus,</li>
                                                    <li>
                                                        Llamadas sospechosas solicitando información de los titulares de datos personales de
                                                        la organización o de información confidencial y/o sensible,
                                                    </li>
                                                    <li>
                                                        Pérdida de dispositivos móviles (computadores portátiles, celulares, tabletas, etc.) y
                                                        externos de almacenamientos (discos duros extraíbles, USB, CD, etc.) que contengan información
                                                        confidencial y/o sensible de la organización,
                                                    </li>
                                                    <li>Cualquier actividad sospechosa que observe en el puesto de trabajo,</li>
                                                    <li>Borrado accidental de información de los titulares de los datos personales,</li>
                                                    <li>Comportamientos extraños de los sistemas de información,</li>
                                                    <li>Evidencia o sospecha de acceso de personal no autorizado al puesto de trabajo.</li>
                                                </ul>
                                            </li>
                                            <li>
                                                Prohibición de publicar o compartir contraseñas confidenciales, no debiendo estas
                                                compartirse ni apuntarse en ningún documento,
                                            </li>
                                            <li>
                                                Prohibición de alteración de la configuración del equipo y la instalación de aplicaciones no
                                                autorizadas,
                                            </li>
                                            <li>No ingerir alimentos y bebidas en los puestos de trabajo,</li>
                                            <li>
                                                Las estaciones de trabajo fijas y los equipos portátiles, deben tener configurado un
                                                estándar de protector de pantalla, de forma que se active ante un tiempo de como máximo doce
                                                (12) minutos sin uso,
                                            </li>
                                            <li>
                                                La pantalla de autenticación para el acceso a la red de <strong>DISTRIMOTOS DE COLOMBIA
                                                    S.A.S</strong>, debe solicitar únicamente el ID de usuario y la contraseña,
                                            </li>
                                            <li>
                                                Cuando el colaborador se ausente de su lugar de trabajo, debe bloquear su estación de
                                                trabajo de tal forma que proteja el acceso a las aplicaciones, servicios y archivos,
                                            </li>
                                            <li>
                                                En casos de almacenamiento de información que requiere niveles altos de seguridad
                                                (Datos personales sensibles, información crítica de la organización) será necesario la destrucción
                                                total del soporte de almacenamiento,
                                            </li>
                                            <li>
                                                Antes de que el equipo de cómputo sea cedido o desechado, además de realizar borrador
                                                seguro, también será necesario eliminar las carpetas temporales, los datos guardados en las
                                                cookies, los backups de los datos, configuración de cuentas de usuario y de correo. (Caso equipos
                                                de cómputo leasing).
                                            </li>
                                        </ul>
                                    </article>
                                </article>



                                <article className="doc-section" id="sec-cap2-2">
                                    <h3 className="doc-section__number-title">
                                        <span className="doc-section__number">2.</span>
                                        TITULARES DE DATOS PERSONALES
                                    </h3>


                                    <article className="doc-subsection" id="sec-cap2-2-1">
                                        <h4 className="doc-subsection__title">2.1. AUTORIZACIONES Y CONSENTIMIENTO</h4>
                                        <p className="doc-subsection__body">
                                            El procedimiento para conseguir o fijar en medios de prueba, la manifestación de voluntad o
                                            autorización del titular de los datos personales será el siguiente:
                                        </p>
                                        <ul className="doc-bullet-list">
                                            <li>
                                                Se pondrá en conocimiento del titular, las consideraciones respecto de la importancia de
                                                manifestar su autorización para el uso de sus datos personales, atendiendo a los aspectos más
                                                importantes de la presente política de manejo de datos,
                                            </li>
                                            <li>
                                                Una vez explicadas las consideraciones en relación con la autorización requerida, le será
                                                entregada un formato de autorización que deberá ser suscrita por el titular,
                                            </li>
                                            <li>
                                                En los casos en los que se requiera de una autorización masiva de tratamiento de datos,
                                                el encargado del evento en el que se desarrolle la recolección de datos, explicará al público las
                                                implicaciones de la aceptación o autorización de tratamiento de datos personales. A continuación,
                                                hará entrega de las respectivas planillas en las que las personas consignarán sus datos; dichas
                                                planillas y el acta o formato de autorización se entenderán como un solo documento,
                                            </li>
                                            <li>
                                                En cualquier caso, la suscripción de cualquier tipo de autorización para el manejo de datos
                                                hará indispensable una explicación de parte del funcionario sobre las implicaciones relativas a la
                                                presente política,
                                            </li>
                                            <li>
                                                Las autorizaciones deberán constar en medios físicos o digitales; sus modelos o formatos
                                                de aceptación estarán disponibles en Carrera 50 Nro. 65-66, Bogotá D.C.
                                            </li>
                                        </ul>
                                    </article>

                                    <article className="doc-subsection" id="sec-cap2-2-2">
                                        <h4 className="doc-subsection__title">2.2. PRUEBA DE LA AUTORIZACIÓN</h4>
                                        <p className="doc-subsection__body">
                                            Podrá ser física o electrónica. Los repositorios o archivos en los que se dé cuenta de las actividades
                                            que se realicen se mantendrán en la sede de la empresa y serán custodiados por la persona
                                            encargada para tal fin. La suscripción de la autorización para el manejo de datos personales o aviso
                                            de privacidad será prueba de la voluntad del titular y otorgará la facultad de manejar sus datos de
                                            acuerdo con la finalidad establecida en el documento para tal fin.
                                        </p>
                                    </article>


                                    <article className="doc-subsection" id="sec-cap2-2-3">
                                        <h4 className="doc-subsection__title">2.3. DERECHOS DE LOS TITULARES DE DATOS</h4>
                                        <p className="doc-subsection__body">
                                            Los titulares podrán presentar solicitudes ante <strong>DISTRIMOTOS DE COLOMBIA S.A.S</strong>, atendiendo a
                                            los siguientes derechos:
                                        </p>
                                        <ul className="doc-bullet-list">
                                            <li>
                                                Acceder, conocer, rectificar y actualizar sus datos personales; este derecho será conocido
                                                con el nombre de Hábeas Data,
                                            </li>
                                            <li>Solicitar prueba de la autorización otorgada para el tratamiento de sus datos,</li>
                                            <li>Recibir información respecto al uso que se le ha dado a sus datos personales,</li>
                                            <li>
                                                Acudir ante las autoridades, en especial ante la Superintendencia de Industria y Comercio,
                                                y presentar quejas por infracciones a lo dispuesto en la normatividad vigente y en el presente
                                                documento,
                                            </li>
                                            <li>Modificar y revocar la autorización y/o solicitar la supresión del dato personal,</li>
                                            <li>
                                                Tener conocimiento y acceder en forma gratuita a sus datos personales que hayan sido
                                                objeto de tratamiento.
                                            </li>
                                        </ul>
                                        <p className="doc-subsection__body">
                                            El ejercicio de los derechos por parte de los titulares de datos personales, se realizará de manera
                                            personal acreditando su identidad a través de la exhibición de su documento de identidad o el de
                                            sus dependientes; así mismo podrán hacerlo sus herederos, su apoderado y demás personas que
                                            sean facultadas por este de manera suficiente.
                                        </p>
                                    </article>


                                    <article className="doc-subsection" id="sec-cap2-2-4">
                                        <h4 className="doc-subsection__title">
                                            2.4. PROCEDIMIENTOS PARA HACER EFECTIVOS DERECHOS DE LOS TITULARES
                                        </h4>
                                        <p className="doc-subsection__body">
                                            Los titulares, o sus causahabientes podrán consultar la información personal del titular que repose
                                            en cualquier base de datos. En consecuencia, <strong>DISTRIMOTOS DE COLOMBIA S.A.S</strong>, garantizará
                                            que los titulares puedan hacer efectivos sus derechos a través de los siguientes mecanismos:
                                        </p>
                                    </article>


                                    <article className="doc-subsection" id="sec-cap2-2-5">
                                        <h4 className="doc-subsection__title">2.5. CONSULTAS</h4>
                                        <p className="doc-subsection__body">
                                            La consulta es el derecho que poseen los titulares de conocer la información personal que reposa
                                            en cualquier base de datos de la <strong>DISTRIMOTOS DE COLOMBIA S.A.S</strong> la cual será atendida en un
                                            máximo de diez (10) días hábiles contados desde la fecha de recibo. Con el fin de atender las
                                            consultas que se presenten en relación con los datos personales que posea la sociedad comercial
                                            se procederá de la siguiente manera:
                                        </p>
                                        <ul className="doc-bullet-list">
                                            <li>
                                                Previo a la presentación de solicitudes, la empresa habilitará canales de comunicación
                                                física o electrónica lo suficientemente sencillos como para garantizar el acceso a los datos
                                                personales por parte de los titulares de los datos. Estos canales de acceso y comunicación deberán
                                                facilitar en todo caso los derechos de los titulares y se harán mediante formularios preestablecidos
                                                sean físicos o virtuales,
                                            </li>
                                            <li>
                                                Una vez recibida la consulta, esta se dirigirá al área encargada de la administración de
                                                los datos personales. La cual la identificará, radicará y procederá a estudiarla,
                                            </li>
                                            <li>
                                                En un término máximo de diez (10) días hábiles contados a partir de la fecha de su recibo,
                                                deberá remitirse la respuesta a la consulta de acuerdo con el canal de comunicación establecido
                                                por el solicitante al momento de su solicitud, sea física o electrónica,
                                            </li>
                                            <li>
                                                Si por algún motivo ajeno a la voluntad del responsable de datos, no fuere posible atender
                                                la consulta dentro del término mencionado en el numeral anterior, se informará al interesado con
                                                dos (2) días hábiles previos al vencimiento, expresando los motivos de la demora y señalando la
                                                fecha en que se atenderá su consulta, la cual en ningún caso podrá superar los cinco (5) días
                                                hábiles siguientes al vencimiento del primer plazo.
                                            </li>
                                        </ul>
                                    </article>


                                    <article className="doc-subsection" id="sec-cap2-2-6">
                                        <h4 className="doc-subsection__title">2.6. RECLAMOS</h4>
                                        <p className="doc-subsection__body">
                                            De acuerdo con lo establecido en las leyes que regulan la materia, el titular, sus herederos o
                                            representantes, pueden presentar reclamos cuando consideren que la información contenida en
                                            la base de datos deba ser corregida, actualizada o suprimida; así mismo podrán hacerlo cuando
                                            consideren que el responsable del tratamiento no ha cumplido con las disposiciones normativas
                                            vigentes. Los reclamos se tramitarán de la siguiente manera:
                                        </p>
                                        <ul className="doc-bullet-list">
                                            <li>
                                                Establecidos los canales de consulta y reclamo que deben darse a conocer al público en
                                                general, los interesados presentarán sus reclamos mediante comunicación dirigida a
                                                <strong>DISTRIMOTOS DE COLOMBIA S.A.S</strong> estableciendo su identificación, los hechos que lo llevan a
                                                presentar su reclamación, su información para notificación y aquellos documentos que pretenda
                                                hacer valer,
                                            </li>
                                            <li>
                                                De ser necesario, <strong>DISTRIMOTOS DE COLOMBIA S.A.S</strong>, como responsable de datos
                                                personales, podrá requerir al reclamante para que en un término de cinco (5) días adicione su
                                                solicitud con el fin de darle respuesta. Transcurridos dos (2) meses desde la fecha del
                                                requerimiento, sin que el solicitante presente la información requerida, se entenderá que ha
                                                desistido del reclamo,
                                            </li>
                                            <li>
                                                En caso de que quien reciba el reclamo no sea competente para resolverlo, dará traslado a
                                                quien corresponda en un término máximo de dos (2) días hábiles e informará de la situación al
                                                interesado,
                                            </li>
                                            <li>
                                                Una vez recibido el reclamo completo, se incluirá en la base de datos una leyenda que diga
                                                <em>"reclamo en trámite"</em> y el motivo del mismo, en un término no mayor a dos (2) días hábiles. Dicha
                                                leyenda deberá mantenerse hasta que el reclamo sea decidido,
                                            </li>
                                            <li>
                                                El término máximo para atender el reclamo será de quince (15) días hábiles contados a
                                                partir del día siguiente a la fecha de su recibo. Cuando no fuere posible atender el reclamo dentro de
                                                dicho término, se informará al interesado los motivos de la demora y la fecha en que se atenderá
                                                su reclamo, la cual en ningún caso podrá superar los ocho (8) días hábiles siguientes al vencimiento
                                                del primer término,
                                            </li>
                                            <li>
                                                Las reclamaciones podrán versar sobre rectificación, actualización o supresión de sus
                                                datos personales, previa acreditación de su identidad.
                                            </li>
                                        </ul>
                                    </article>


                                    <article className="doc-subsection" id="sec-cap2-2-7">
                                        <h4 className="doc-subsection__title">
                                            2.7. RECTIFICACIÓN, ACTUALIZACIÓN Y SUPRESIÓN DE DATOS
                                        </h4>
                                        <p className="doc-subsection__body">
                                            Se procederá de conformidad a las solicitudes de los titulares de los datos, siempre que presenten
                                            sus solicitudes de acuerdo con las normas mínimas sobre el tema. La supresión no requerirá
                                            esgrimir argumentos más allá de la simple voluntad del dato y por ello no habrá lugar a la réplica de
                                            parte del responsable de datos.
                                        </p>
                                        <p className="doc-subsection__body">
                                            La solicitud de rectificación, actualización o supresión deberá ser presentada a través de los medios
                                            anteriormente descritos y contendrá:
                                        </p>
                                        <ul className="doc-bullet-list">
                                            <li>El nombre y domicilio del titular o cualquier otro medio para recibir la respuesta,</li>
                                            <li>Los documentos que acrediten la identidad o la personalidad de su representante,</li>
                                            <li>
                                                La descripción clara y precisa de los datos personales respecto de los cuales el titular
                                                busca ejercer alguno de los derechos,
                                            </li>
                                            <li>
                                                En caso dado, otros elementos o documentos que faciliten la localización de los datos
                                                personales,
                                            </li>
                                            <li>
                                                Se procederá de conformidad a las solicitudes de los titulares de los datos, siempre que
                                                presenten sus solicitudes de acuerdo con las normas mínimas sobre el tema. La supresión
                                                no requerirá esgrimir argumentos más allá de la simple voluntad del dato y por ello no habrá lugar a
                                                la réplica de parte del responsable de datos.
                                            </li>
                                        </ul>
                                    </article>

                                </article>



                                <article className="doc-section" id="sec-cap2-3">
                                    <h3 className="doc-section__number-title">
                                        <span className="doc-section__number">3.</span>
                                        SISTEMA DE GESTIÓN DE DATOS PERSONALES
                                    </h3>


                                    <article className="doc-subsection" id="sec-cap2-3-1">
                                        <h4 className="doc-subsection__title">
                                            3.1. Socialización de la Política de Tratamiento de Datos Personales
                                        </h4>
                                        <p className="doc-subsection__body">
                                            La política deberá ser comunicada y publicada tanto en medio físico como electrónico, esto es,
                                            a través de correo electrónico institucional enviado desde el órgano directivo de la compañía y
                                            su publicación en la página web de la sociedad.
                                        </p>
                                    </article>


                                    <article className="doc-subsection" id="sec-cap2-3-2">
                                        <h4 className="doc-subsection__title">
                                            3.2. Definición del Oficial del Protección de Datos Personales
                                        </h4>
                                        <p className="doc-subsection__body">
                                            A través de una reunión interna de la dirección de la empresa, se definirá la persona que asumirá
                                            el cargo de Oficial de Protección de Datos Personales y sentar un acta de la reunión aludida
                                            como constancia y prueba de la ocurrencia de esta.
                                        </p>
                                        <p className="doc-subsection__body">
                                            El Oficial de Protección de Datos Personales es la persona designada al interior de la compañía
                                            como el responsable de vigilar el cumplimiento del Sistema de Gestión de Datos Personales, sus
                                            principales responsabilidades son la medición y evaluación permanente, y el trámite de las
                                            solicitudes que realicen los titulares de la información. Las funciones principales del Oficial de
                                            Protección de Datos Personales son:
                                        </p>
                                        <ul className="doc-bullet-list">
                                            <li>Actualizar la Política de Tratamiento de Datos Personales una vez por año,</li>
                                            <li>Socializar periódicamente la Política de Tratamiento de Datos Personales,</li>
                                            <li>
                                                Coordinar la definición e implementación de los controles
                                                del Sistema de Gestión de Datos Personales,
                                            </li>
                                            <li>
                                                Servir de coordinador con las demás áreas de la compañía para asegurar una correcta
                                                implementación transversal del Sistema de Gestión de Datos Personales,
                                            </li>
                                            <li>Impulsar una cultura de protección de datos dentro de la organización,</li>
                                            <li>
                                                Actualizar periódicamente el registro realizado en el Registro Nacional de Base de Datos
                                                establecido por la Superintendencia de Industria y Comercio,
                                            </li>
                                            <li>
                                                Realizar capacitaciones periódicas a los empleados en relación con la protección de datos
                                                personales,
                                            </li>
                                            <li>
                                                Capacitar a los empleados nuevos que tengan acceso debido a las condiciones de su cargo a
                                                datos personales dentro de la organización,
                                            </li>
                                            <li>
                                                Velar por la implementación de auditorías internas con el fin de verificar el cumplimiento de sus
                                                políticas de tratamiento de datos personales.
                                            </li>
                                        </ul>
                                    </article>

                                </article>

                            </section>

                        </div>
                    </main>

                </div>
            </div>


        </div>

    )
}

