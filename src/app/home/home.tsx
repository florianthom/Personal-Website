import React from "react";
import { NavBar } from "@/src/app/shared/navbar/navbar";
import Image from "next/image";
import { Footer } from "@/src/app/shared/footer/footer";
import { discord_link, email_string, github_link, linkedin_link, twitter_link } from "../shared/constants/constants";
import * as constants from "@/src/app/shared/constants/constants";
import Link from "next/link";

export interface Props { }

export const Home: React.FC<Props> = (props: Props) => {
    function handleScroll(): void {
        setTimeout(() => {
            this.scrollIntoView({ behavior: "smooth" });
        }, 500);
    }

    return (
        <div>
            <div className="custom-background-image h-screen bg-no-repeat bg-cover bg-center">
                <NavBar></NavBar>
                <div className="h-screen flex justify-center items-center transform">
                    <div className="max-w-[50%]">
                        <h1 className="text-white tracking-headline text-3xl sm:text-5xl lg:text-5xl pt-24">
                            FLORIAN THOM
                        </h1>
                        <h2 className="text-white text-xl sm:text-3xl lg:text-3xl pt-5">
                            Freelancer covering professional services in IT and media.
                            From webapps to cloud expertise I offer tailored solutions to elevate your business.
                        </h2>
                        {/*social home group*/}
                        <div className="pt-10 flex justify-start">
                            <a href={linkedin_link} target="_blank" rel="noopener noreferrer" className="pr-4 sm:pr-6">
                                <Image
                                    src="/static/images/linkedIn_transparent.png"
                                    alt="me"
                                    width="28"
                                    height="28"
                                    priority={true}
                                    quality={25}
                                    unoptimized={constants.static_site}
                                />
                            </a>
                            <a href={github_link} target="_blank" rel="noopener noreferrer" className="pr-4 sm:pr-6">
                                <Image
                                    src="/static/images/github_transparent.png"
                                    alt="me"
                                    width="28"
                                    height="28"
                                    priority={true}
                                    quality={25}
                                    unoptimized={constants.static_site}
                                />
                            </a>
                            <a
                                href={"mailto:" + email_string}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="pr-4 sm:pr-6"
                            >
                                <Image
                                    src="/static/images/mail_tranparent.png"
                                    alt="me"
                                    width="28"
                                    height="28"
                                    priority={true}
                                    quality={25}
                                    unoptimized={constants.static_site}
                                />
                            </a>
                            <a href={twitter_link} target="_blank" rel="noopener noreferrer" className="pr-4 sm:pr-6">
                                <Image
                                    src="/static/images/twitter_logo.png"
                                    alt="me"
                                    width="28"
                                    height="28"
                                    priority={true}
                                    quality={25}
                                    unoptimized={constants.static_site}
                                />
                            </a>
                            <a href={discord_link} target="_blank" rel="noopener noreferrer" className="pr-4 sm:pr-6">
                                <Image
                                    src="/static/images/discord_transparent.png"
                                    alt="me"
                                    width="28"
                                    height="28"
                                    priority={true}
                                    quality={25}
                                    unoptimized={constants.static_site}
                                />
                            </a>
                        </div>
                        <div className="flex justify-center pt-12 sm:pt-16 lg:pt-24">
                            <Link href="/#services" className="border-2 border-gray-400 backdrop-blur-sm bg-main-color drop-shadow-xl bg-opacity-50 text-white px-8 sm:px-12 lg:px-24 py-4 rounded-md text-md lg:text-xl lg:text-2xl whitespace-nowrap">
                                Service Portfolio
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div id="services" className="bg-main-color">
                <div className="py-32 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
                    <h2 className="text-white text-3xl tracking-headline">SERVICES</h2>
                    <div className="text-base text-white pt-24">
                        Tailored end-to-end thinking covering the holistic product life cycle.
                        Consulting Services designed to cater to your unique needs.
                        Explore my range of offerings, designed to elevate your digital presence and empower your business.
                        From innovative web development to cutting-edge IT solutions, discover how I can bring your vision to life.
                        Explore my comprehensive services below and take the first step towards transforming your digital landscape.
                    </div>
                    <div className="pt-16 pb-8">
                        <h2 className="text-2xl text-white py-8">
                            Portfolio
                        </h2>
                        <ul className="list-disc text-base text-white list-inside space-y-4">
                            <li>
                                Conducting As-Is analysis: Evaluate your current situation
                            </li>
                            <li>
                                Setup agile project management
                            </li>
                            <li>
                                Webdesign and UX optimization
                            </li>
                            <li>
                                Wordpress (CMS) development
                            </li>
                            <li>
                                General software development: extend your system landscape
                            </li>
                            <li>
                                Website development
                            </li>
                            <li>
                                Web application development
                            </li>
                            <li>
                                Cloud migration assistance
                            </li>
                            <li>
                                Cloud infrastructure development
                            </li>
                            <li>
                                Application Launch assistance
                            </li>
                            <li>
                                User Support services
                            </li>
                            <li>
                                Hosting and operator services
                            </li>
                            <li>
                                Search engine optimization (SEO)
                            </li>
                            <li>
                                Support and maintenance
                            </li>
                            <li>
                                Conducting training sessions
                            </li>
                            <li>
                                Consulting in further areas of skills
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div className="py-32 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
                    <h2 className="text-black text-3xl tracking-headline-mobile sm:tracking-headline">
                        REFERENCES & SHOWCASES
                    </h2>
                    <div className="text-base text-black pt-24">
                        Explore a snipped of my references, professional showcases and insightful observations.
                        This examples highlights the depth of my expertise and the quality of my work.
                        Take a look into a range of references, industry insights, and showcases that speak to my experience and commitment to delivering excellent results.
                        Single projects are open source.
                        Feel free to check them out on{" "}
                        <a className="hover:underline" href={github_link} target="_blank" rel="noopener noreferrer">
                            github
                        </a>
                        .
                    </div>

                    <div className="py-8">
                        <div className="px-4 py-24 flex justify-around items-center lg:items-stretch flex-col lg:flex-row space-y-12 lg:space-y-0">

                            <div className="shadow-md transition hover:shadow-lg w-4/6 lg:w-2/6 py-12 lg:py-2">
                                <div className="p-8 flex justify-center">
                                    <Image
                                        src={"/static/images/topnotch-logo.png"}
                                        alt={"topnotch logo"}
                                        width={0}
                                        height={0}
                                        className="h-24 w-full object-contain"
                                        unoptimized={constants.static_site}
                                    />
                                </div>
                                <div className="px-4 py-4">
                                    <div className="text-2xl">Topnotch: Worlds state of the art - Whats your take?</div>
                                    <div className="py-4">
                                        Web application to get an overview about worlds state of the art across various global domains,
                                        providing insights into the cutting-edge technologies, innovations, and trends shaping the contemporary world.
                                        You ever wanted whats the best bike for tracking or whats the best family car and why - here you are at the right place.
                                    </div>
                                </div>
                            </div>

                            <div className="shadow-md transition hover:shadow-lg w-4/6 lg:w-2/6 py-12 lg:py-2">
                                <div className="flex justify-center">
                                    <Image
                                        src={"/static/images/lebenserinnerungen.png"}
                                        alt={"lebenserinnerungen logo"}
                                        width={0}
                                        height={0}
                                        style={{ width: "200%", height: "200%" }}
                                        unoptimized={constants.static_site}
                                    />
                                </div>
                                <div className="px-4 py-4">
                                    <div className="text-2xl">
                                        Verein zur Förderung lebensgeschichtlichen Erinnerns
                                        und biografischen Erzählens e.V.
                                    </div>
                                    <div className="py-4">
                                        Promotion of personal, verbal storytelling and providing suitable formats, methods, storytelling occasions, and educational offerings.
                                        Storytelling builds bridges and connects.
                                        Stories are the threads that bring people from different worlds and times together.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="px-4 py-16 flex justify-around items-center lg:items-stretch flex-col lg:flex-row space-y-12 lg:space-y-0">
                            <div className="shadow-md transition hover:shadow-lg w-4/6 lg:w-2/6 py-12 lg:py-2">
                                <div className="flex justify-center">
                                    <Image
                                        src={"/static/images/infra-aws.png"}
                                        alt={"cloud architecture image"}
                                        width={0}
                                        height={0}
                                        style={{ width: "200%", height: "200%" }}
                                        unoptimized={constants.static_site}
                                    />
                                </div>
                                <div className="px-4 py-4">
                                    <div className="text-2xl">
                                        Cloud Architecture Solution Template
                                    </div>
                                    <div className="py-4">
                                        Cloud Architecture Solution Template: A starting point for cloud applications with terraform and ansible.
                                        AWS cluster solution utilizing aws eks with focus on secrurity and scalability.
                                    </div>
                                </div>
                            </div>

                            <div className="shadow-md transition hover:shadow-lg w-4/6 lg:w-2/6 py-12 lg:py-2">
                                <div className="flex justify-center">
                                    <Image
                                        src={"/static/images/map-visualization.png"}
                                        alt={"map visualization"}
                                        width={0}
                                        height={0}
                                        style={{ width: "200%", height: "200%" }}
                                        unoptimized={constants.static_site}
                                    />
                                </div>
                                <div className="px-4 py-4">
                                    <div className="text-2xl">
                                        Ptolomy Venture
                                    </div>
                                    <div className="py-4">
                                        Exploring an array of map visualizations crafted using diverse tools not only illustrates
                                        the breadth of available cartographic techniques but also highlights the nuanced ways geographical data can be portrayed and analyzed.
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="text-base text-black pt-24">
                        This represents only a selection. If you want to check out other iniviatives, I provide a separate projects page.
                    </div>
                </div>
            </div>
            <div id="skills" className="bg-main-color">
                <div className="py-32 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
                    <h2 className="text-white text-3xl tracking-headline">MY SKILLS</h2>
                    <div className="text-base text-white pt-24">
                        Over the years I encountered many technologies and gained experience in numerous areas. I love
                        to learn new technologies and to examine them for advantages and disadvantages compared to the
                        already known alternatives.
                    </div>
                    <div className="text-base text-white pt-24">
                        <div className="flex justify-between items-center md:items-stretch flex-col md:flex-row">
                            <div className="my-8 w-2/3">
                                <h3 className="text-2xl text-white py-4">Backend</h3>
                                <ul className="list-disc text-base text-white list-inside">
                                    <li>C# - Asp.net</li>
                                    <li>Java - Spring Boot</li>
                                    <li>Python - Django</li>
                                    <li>OpenApi / Swagger</li>
                                    <li>Rest / GraphQL</li>
                                    <li>Protobuf</li>
                                    <li>Databases - Postgres SQL</li>
                                    <li>Docker (Compose)</li>
                                    <li>Clean Architecture</li>
                                    <li>Domain Driven Design</li>
                                </ul>
                            </div>
                            <div className="my-8 w-2/3">
                                <h3 className="text-2xl text-white py-4">Cloud & DevOps</h3>
                                <ul className="list-disc text-base text-white list-inside">
                                    <li>
                                        Cloud Provider AWS, Azure
                                        <ul className="list-disc text-base text-white list-inside indent-4">
                                            <li>Network: VPC, VNet</li>
                                            <li>Compute - ECS, ACA / EKS, AKS</li>
                                            <li>Database - RDS, Azure SQL Database / Dynamo DB, Cosmos DB</li>
                                            <li>Storage - S3, Blob Storage</li>
                                            <li>Analytics - OpenSearch, Elastic Cloud</li>
                                            <li>Security - IAM, Microsoft Entra (External) Id</li>
                                        </ul>
                                    </li>
                                    <li>Infrastructure as Code - Terraform</li>
                                    <li>CI/CD - Jenkins, Gitlab</li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex justify-center items-center py-24">
                            <div className="border-t border-gray-400 w-full"></div>
                        </div>

                        <div className="flex justify-between items-center md:items-stretch flex-col md:flex-row">
                            <div className="my-8 w-2/3">
                                <h3 className="text-2xl text-white py-4">Frontend</h3>
                                <ul className="list-disc text-base text-white list-inside">
                                    <li>Angular</li>
                                    <li>Next.js</li>
                                    <li>React.js</li>
                                    <li>D3.js</li>
                                    <li>Bootstrap</li>
                                    <li>Material Design</li>
                                    <li>Tailwind CSS</li>
                                </ul>
                            </div>
                            <div className="my-8 w-2/3">
                                <h3 className="text-2xl text-white py-4">Design & Visualization</h3>
                                <ul className="list-disc text-base text-white list-inside">
                                    <li>Figma</li>
                                    <li>Wordpress</li>
                                    <li>Affinity</li>
                                    <li>Photoshop</li>
                                    <li>Lightroom</li>
                                </ul>
                            </div>
                            <div className="my-8 w-2/3">
                                <h3 className="text-2xl text-white py-4">Mobile</h3>
                                <ul className="list-disc text-base text-white list-inside">
                                    <li>Flutter</li>
                                    <li>Responsive Design</li>
                                    <li>Android Studios</li>
                                    <li>Unity</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="py-32 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
                    <h2 className="text-black text-3xl tracking-headline">FURTHER KNOWLEDGE</h2>
                    <div className="text-base text-black pt-24">
                        Exploring additional Insights: a closer look at my supplementary knowledge.
                        In addition to my primary skills, I invite you to explore a complementary range of knowledge and insights.
                        This section sheds light on various supplementary areas I&apos;ve cultivated, offering a glimpse
                        into additional competencies that enrich my professional repertoire.
                    </div>
                    <div className="text-base text-black pt-24">
                        <div className="flex justify-evenly flex-col md:flex-row">
                            <div className="my-8 w-2/3">
                                <h3 className="text-2xl">Big Data & Data Science</h3>
                                <ul className="list-disc text-base list-inside">
                                    <li>Terminal</li>
                                    <li>Shell/Bash-Scripting</li>
                                    <li>Scala</li>
                                    <li>Python</li>
                                    <li>Spark</li>
                                    <li>Flink</li>
                                    <li>MapReduce</li>
                                    <li>Hadoop</li>
                                    <li>Graphviz dot</li>
                                    <li>Gnuplot</li>
                                </ul>
                            </div>
                            <div className="my-8 w-2/3">
                                <h3 className="text-2xl">IOT</h3>
                                <ul className="list-disc text-base list-inside">
                                    <li>TI MSP430G2553</li>
                                    <li>Arduino</li>
                                    <li>Raspberry Pi</li>
                                    <li>Code Composer Studio</li>
                                    <li>TI EnergyTrace Technology</li>
                                    <li>Ultra-Low Power Advisor</li>
                                </ul>
                            </div>
                            <div className="my-8 w-2/3">
                                <h3 className="text-2xl">Artificial Intelligence</h3>
                                <ul className="list-disc text-base list-inside">
                                    <li>Algebra</li>
                                    <li>Analysis</li>
                                    <li>Geometry</li>
                                    <li>Stochastic</li>
                                    <li>Regression</li>
                                    <li>Classification</li>
                                    <li>Backpropagation</li>
                                    <li>ANN</li>
                                    <li>Basic RNN</li>
                                    <li>LSTM (-Gates)</li>
                                    <li>GRU (-Gates)</li>
                                    <li>Transformer</li>
                                    <li>CNN</li>
                                    <li>GAN</li>
                                    <li>Jupyter</li>
                                    <li>Tensorflow</li>
                                    <li>PyTorch</li>
                                    <li>MxNet</li>
                                    <li>Unity ml-gents</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};
