import React from "react";
import "../Css Files/Resources.css"
import placeHolderImg from "../Images/placeholder.png"
import axioslogo from "../Images/axios.png"
import reactlogo from "../Images/react.png"
import csslogo from "../Images/css.png"
import jslogo from "../Images/javascript.png"
import chartjslogo from "../Images/chartjs.png"
import chatgptlogo from "../Images/chatgpt.png"
import htmllogo from "../Images/html5.png"
function Resources() {
    return (
        <div className="resources-page-container">
            <section className="inspiration">
                <h1>İlhamımız</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat mi mi, sit amet cursus dolor convallis sed. Integer dignissim aliquet felis. Etiam sit amet rhoncus ante. Aenean molestie ornare rutrum. Pellentesque congue placerat nunc, semper pulvinar enim aliquet eu. Maecenas elementum euismod euismod. Suspendisse hendrerit magna id nulla ornare, vel posuere dui ullamcorper. Nullam at nulla id est tempus vulputate at sit amet purus. Proin ultricies lectus sapien, in suscipit enim eleifend quis. Vivamus est nulla, interdum ut mauris ultrices, ornare porttitor sem.

                    Aliquam dictum condimentum porttitor. Phasellus bibendum augue nec vehicula mattis. Nulla vulputate a odio vitae dapibus. Nam non diam pellentesque, bibendum odio sit amet, malesuada nisi. Donec id ornare eros, eget faucibus enim. Maecenas facilisis lacus vitae velit pretium, sed congue risus rhoncus. Aenean mollis libero felis, nec efficitur tortor euismod ut. Aenean aliquam sollicitudin tempor. Cras ultricies enim et ipsum hendrerit, eget commodo ex suscipit. Nulla quis eleifend metus. Sed id nunc et tellus iaculis sodales. Aenean et tempus ex.

                    Fusce cursus at nulla ac porttitor. Etiam lacinia dui quis lobortis dictum. Nulla ornare mi quis velit venenatis condimentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut at gravida tellus, ut placerat ex. Mauris elit odio, tristique nec sollicitudin sed, vehicula non nibh. Donec vel mauris eu tellus faucibus aliquam. Morbi gravida suscipit augue, consequat egestas justo accumsan ac. Morbi vel velit fermentum, aliquet velit commodo, malesuada erat.
                </p>
            </section>

            <section className="used-tools-display">
                <h1>Kullandığımız Araçlar</h1>
                <div className="used-tools-container right">
                    <img src={htmllogo} alt="" className="highlight-img"></img >
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum nisi non lobortis elementum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam libero mauris, eleifend ut est ac, malesuada ornare eros. Sed vitae elit id lectus faucibus lobortis. Aenean suscipit faucibus libero at finibus. Nullam ac tortor eget urna euismod viverra ac sit amet ex. Nulla facilisi. Donec tristique lorem eu dolor congue condimentum. Nam fermentum tristique justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed dolor dui, faucibus non neque in, tempus accumsan ipsum. Sed sit amet felis id tellus commodo efficitur vel ac dui. In sit amet quam vitae diam mollis sagittis sed nec quam. Proin nec purus et nisi tempor consequat. Duis vel mattis nisl.</p>
                </div>
                <div className="used-tools-container left">
                    <img src={csslogo} alt="" className="highlight-img"></img >
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum nisi non lobortis elementum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam libero mauris, eleifend ut est ac, malesuada ornare eros. Sed vitae elit id lectus faucibus lobortis. Aenean suscipit faucibus libero at finibus. Nullam ac tortor eget urna euismod viverra ac sit amet ex. Nulla facilisi. Donec tristique lorem eu dolor congue condimentum. Nam fermentum tristique justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed dolor dui, faucibus non neque in, tempus accumsan ipsum. Sed sit amet felis id tellus commodo efficitur vel ac dui. In sit amet quam vitae diam mollis sagittis sed nec quam. Proin nec purus et nisi tempor consequat. Duis vel mattis nisl.</p>
                </div>
                <div className="used-tools-container right">
                    <img src={jslogo} alt="" className="highlight-img"></img >
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum nisi non lobortis elementum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam libero mauris, eleifend ut est ac, malesuada ornare eros. Sed vitae elit id lectus faucibus lobortis. Aenean suscipit faucibus libero at finibus. Nullam ac tortor eget urna euismod viverra ac sit amet ex. Nulla facilisi. Donec tristique lorem eu dolor congue condimentum. Nam fermentum tristique justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed dolor dui, faucibus non neque in, tempus accumsan ipsum. Sed sit amet felis id tellus commodo efficitur vel ac dui. In sit amet quam vitae diam mollis sagittis sed nec quam. Proin nec purus et nisi tempor consequat. Duis vel mattis nisl.</p>
                </div>
                <div className="used-tools-container left">
                    <img src={reactlogo} alt="" className="highlight-img"></img >
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum nisi non lobortis elementum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam libero mauris, eleifend ut est ac, malesuada ornare eros. Sed vitae elit id lectus faucibus lobortis. Aenean suscipit faucibus libero at finibus. Nullam ac tortor eget urna euismod viverra ac sit amet ex. Nulla facilisi. Donec tristique lorem eu dolor congue condimentum. Nam fermentum tristique justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed dolor dui, faucibus non neque in, tempus accumsan ipsum. Sed sit amet felis id tellus commodo efficitur vel ac dui. In sit amet quam vitae diam mollis sagittis sed nec quam. Proin nec purus et nisi tempor consequat. Duis vel mattis nisl.</p>
                </div>
                <div className="used-tools-container right">
                    <img src={axioslogo} alt="" className="highlight-img"></img >
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum nisi non lobortis elementum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam libero mauris, eleifend ut est ac, malesuada ornare eros. Sed vitae elit id lectus faucibus lobortis. Aenean suscipit faucibus libero at finibus. Nullam ac tortor eget urna euismod viverra ac sit amet ex. Nulla facilisi. Donec tristique lorem eu dolor congue condimentum. Nam fermentum tristique justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed dolor dui, faucibus non neque in, tempus accumsan ipsum. Sed sit amet felis id tellus commodo efficitur vel ac dui. In sit amet quam vitae diam mollis sagittis sed nec quam. Proin nec purus et nisi tempor consequat. Duis vel mattis nisl.</p>
                </div>
                <div className="used-tools-container left">
                    <img src={chartjslogo} alt="" className="highlight-img"></img >
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum nisi non lobortis elementum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam libero mauris, eleifend ut est ac, malesuada ornare eros. Sed vitae elit id lectus faucibus lobortis. Aenean suscipit faucibus libero at finibus. Nullam ac tortor eget urna euismod viverra ac sit amet ex. Nulla facilisi. Donec tristique lorem eu dolor congue condimentum. Nam fermentum tristique justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed dolor dui, faucibus non neque in, tempus accumsan ipsum. Sed sit amet felis id tellus commodo efficitur vel ac dui. In sit amet quam vitae diam mollis sagittis sed nec quam. Proin nec purus et nisi tempor consequat. Duis vel mattis nisl.</p>
                </div>
                <div className="used-tools-container right">
                    <img src={chatgptlogo} alt="" className="highlight-img"></img >
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum nisi non lobortis elementum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam libero mauris, eleifend ut est ac, malesuada ornare eros. Sed vitae elit id lectus faucibus lobortis. Aenean suscipit faucibus libero at finibus. Nullam ac tortor eget urna euismod viverra ac sit amet ex. Nulla facilisi. Donec tristique lorem eu dolor congue condimentum. Nam fermentum tristique justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed dolor dui, faucibus non neque in, tempus accumsan ipsum. Sed sit amet felis id tellus commodo efficitur vel ac dui. In sit amet quam vitae diam mollis sagittis sed nec quam. Proin nec purus et nisi tempor consequat. Duis vel mattis nisl.</p>
                </div>
            </section>

            <section className="resources-text-container">
                <h1>Kaynakça</h1>
                <p>
                    https://byjus.com/biology/nitrogen-cycle/

                    Morbi commodo libero in maximus laoreet. Curabitur metus nisl, mattis eu metus quis, elementum dictum diam. Donec suscipit elit vitae tortor fringilla ultricies. Maecenas at nisl ante. Vestibulum laoreet lacus id orci faucibus malesuada. Pellentesque porta rutrum ultricies. Morbi vehicula vestibulum lacus nec eleifend. Aliquam id tortor felis. Suspendisse consectetur elit eget tristique imperdiet. Quisque varius augue at ultricies auctor. Donec rutrum velit vitae felis congue iaculis. Maecenas consequat mauris eu dui pretium, vel euismod erat gravida. Nam ac viverra diam.

                    Morbi cursus aliquet nulla in elementum. Sed vel arcu ligula. Aenean ullamcorper lorem est, eu pulvinar orci porttitor id. Proin varius felis sit amet scelerisque suscipit. Phasellus elementum, sem et ornare scelerisque, velit nulla pretium metus, eu suscipit magna nulla vel dui. Praesent magna nisi, dapibus id mattis non, venenatis quis magna. Sed laoreet dolor et mattis placerat. Cras vitae blandit magna, vitae porta justo. Morbi elementum, arcu id ullamcorper sagittis, elit quam laoreet elit, elementum congue lectus tortor vel eros. Vestibulum tempus tristique est, vitae congue urna dictum a. Vestibulum vehicula, ipsum condimentum laoreet aliquam, eros augue placerat dolor, ac commodo nisi ante non mauris. In libero diam, ultrices id eleifend sit amet, pretium vitae tellus.

                    Ut faucibus maximus turpis ac tincidunt. Sed imperdiet libero non sem bibendum congue. Nulla facilisi. Nullam non neque efficitur, tempor arcu et, fermentum dolor. Phasellus malesuada sit amet erat aliquam mollis. Nunc felis magna, malesuada eu vulputate id, rutrum in mauris. Aenean at enim dignissim, convallis libero at, gravida nunc. Vestibulum vel nibh eu ipsum malesuada venenatis. Mauris ut libero quam. Quisque nisl enim, facilisis id mattis tempus, varius non tellus. Curabitur lacinia ante at suscipit malesuada. Cras vel placerat lectus. Duis facilisis ligula euismod mauris egestas interdum. Donec ipsum nulla, viverra nec gravida at, suscipit sit amet dui. Suspendisse quis sapien a sapien finibus consectetur. Curabitur egestas velit vel neque imperdiet, ut consequat leo tincidunt.

                    Curabitur et turpis sagittis, suscipit quam quis, maximus est. Praesent ut efficitur tortor, vel scelerisque est. Sed laoreet iaculis risus non iaculis. Praesent eu dignissim libero, a varius dolor. Morbi tempus venenatis augue, ac porta metus sodales id. Aliquam dictum ornare placerat. Vivamus elementum blandit laoreet. Etiam mauris magna, condimentum vel dignissim a, luctus ac sapien. Mauris faucibus semper justo. Proin in ligula pharetra, tincidunt urna vel, ultrices metus. Aenean sit amet nunc pretium, iaculis magna eu, scelerisque orci. Suspendisse sem odio, auctor eu rutrum id, aliquet in tellus.

                    Donec vulputate, enim vitae porta dignissim, libero lectus egestas dolor, ut maximus nunc quam nec lectus. Duis id ex ut massa mattis rutrum eget sed est. Sed accumsan faucibus mauris, nec volutpat magna sagittis nec. Sed sodales nulla dolor, nec pulvinar nisi mattis dignissim. Aliquam accumsan pulvinar leo, ut eleifend purus. Aliquam quis turpis vel odio suscipit ornare. Aenean imperdiet ut est id vehicula. Pellentesque interdum ipsum nec nulla dignissim tempus. Aenean tempor mauris ut sem tempus, non hendrerit nulla gravida. Nulla laoreet libero mi, quis facilisis orci maximus ut. Ut dignissim tempus elit, in tempor urna. Aenean nunc leo, fringilla vel faucibus nec, sodales sit amet urna. Nullam neque nisl, interdum non ligula sed, condimentum tristique purus.

                    Suspendisse suscipit sem at orci laoreet, eget mollis mi dapibus. Cras at sodales eros. Nullam condimentum nunc ut lacus vulputate fringilla. Integer consequat, est molestie efficitur volutpat, justo erat mollis mi, eu imperdiet ex leo nec velit. Donec hendrerit posuere semper. Sed molestie sed augue eget auctor. Cras eget risus ut ipsum rhoncus vestibulum. Morbi gravida lectus vel metus congue rutrum.

                    Quisque fringilla tristique lorem, eu consectetur diam faucibus laoreet. Integer sed congue massa. Nulla libero leo, sodales et condimentum vitae, lobortis quis eros. Integer nisi augue, accumsan ac elementum ut, aliquam nec odio. Aliquam a condimentum arcu, eget suscipit mauris. Fusce dolor enim, consequat id leo at, sagittis lobortis ante. Quisque a suscipit dui. Cras nec est vulputate, imperdiet dui et, dignissim neque. Maecenas sed velit id turpis eleifend lobortis a vitae mi. Aliquam porta diam ac venenatis molestie. Vivamus in pharetra ipsum.

                    Etiam euismod elementum commodo. Ut tempus elit quis facilisis auctor. Suspendisse accumsan vestibulum lacus in condimentum. Nulla vel justo in magna tempus auctor. Mauris vestibulum purus eget condimentum tincidunt. Suspendisse laoreet euismod viverra. Proin eros orci, malesuada vel consectetur ut, dictum sit amet lorem. Sed tempus orci pretium ante lobortis blandit.

                    Morbi consequat ut mi a euismod. Aenean a nisl eget arcu iaculis bibendum a at sapien. Nam imperdiet augue sed imperdiet imperdiet. Vivamus quis sollicitudin diam. Curabitur at consectetur elit. Pellentesque semper ornare odio, quis efficitur justo suscipit id. Cras vel porttitor ex. Fusce molestie ex sit amet massa luctus, vitae varius velit hendrerit. Nulla consequat nunc eget leo molestie egestas. Quisque viverra tellus ut rutrum luctus. In in mollis arcu, sed vestibulum tellus. Mauris ullamcorper erat eu hendrerit sagittis.
                </p>
            </section>

            <section className="highlights-container">
                <h1>Highlights</h1>
                <div className="inner-highlist-container">
                    <figure className="highlight-figure">
                        <img src={placeHolderImg} alt="" className="highlight-img"></img >
                        <figcaption>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at nulla metus. Ut congue ultrices elementum. Curabitur pulvinar commodo magna. Quisque nec lorem dolor. Nullam finibus dolor quis cursus tempus. Nulla nec massa ac enim posuere efficitur. Nam auctor turpis sagittis nulla semper varius ac sed nulla. Ut vitae neque.</figcaption>
                    </figure>
                    <figure className="highlight-figure">
                        <img src={placeHolderImg} alt="" className="highlight-img"></img >
                        <figcaption>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at nulla metus. Ut congue ultrices elementum. Curabitur pulvinar commodo magna. Quisque nec lorem dolor. Nullam finibus dolor quis cursus tempus. Nulla nec massa ac enim posuere efficitur. Nam auctor turpis sagittis nulla semper varius ac sed nulla. Ut vitae neque.</figcaption>
                    </figure>
                    <figure className="highlight-figure">
                        <img src={placeHolderImg} alt="" className="highlight-img"></img >
                        <figcaption>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at nulla metus. Ut congue ultrices elementum. Curabitur pulvinar commodo magna. Quisque nec lorem dolor. Nullam finibus dolor quis cursus tempus. Nulla nec massa ac enim posuere efficitur. Nam auctor turpis sagittis nulla semper varius ac sed nulla. Ut vitae neque.</figcaption>
                    </figure>
                    <figure className="highlight-figure">
                        <img src={placeHolderImg} alt="" className="highlight-img"></img >
                        <figcaption>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at nulla metus. Ut congue ultrices elementum. Curabitur pulvinar commodo magna. Quisque nec lorem dolor. Nullam finibus dolor quis cursus tempus. Nulla nec massa ac enim posuere efficitur. Nam auctor turpis sagittis nulla semper varius ac sed nulla. Ut vitae neque.</figcaption>
                    </figure>
                    <figure className="highlight-figure">
                        <img src={placeHolderImg} alt="" className="highlight-img"></img >
                        <figcaption>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at nulla metus. Ut congue ultrices elementum. Curabitur pulvinar commodo magna. Quisque nec lorem dolor. Nullam finibus dolor quis cursus tempus. Nulla nec massa ac enim posuere efficitur. Nam auctor turpis sagittis nulla semper varius ac sed nulla. Ut vitae neque.</figcaption>
                    </figure>
                    <figure className="highlight-figure">
                        <img src={placeHolderImg} alt="" className="highlight-img"></img >
                        <figcaption>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at nulla metus. Ut congue ultrices elementum. Curabitur pulvinar commodo magna. Quisque nec lorem dolor. Nullam finibus dolor quis cursus tempus. Nulla nec massa ac enim posuere efficitur. Nam auctor turpis sagittis nulla semper varius ac sed nulla. Ut vitae neque.</figcaption>
                    </figure>
                    <figure className="highlight-figure">
                        <img src={placeHolderImg} alt="" className="highlight-img"></img >
                        <figcaption>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at nulla metus. Ut congue ultrices elementum. Curabitur pulvinar commodo magna. Quisque nec lorem dolor. Nullam finibus dolor quis cursus tempus. Nulla nec massa ac enim posuere efficitur. Nam auctor turpis sagittis nulla semper varius ac sed nulla. Ut vitae neque.</figcaption>
                    </figure>
                    <figure className="highlight-figure">
                        <img src={placeHolderImg} alt="" className="highlight-img"></img >
                        <figcaption>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at nulla metus. Ut congue ultrices elementum. Curabitur pulvinar commodo magna. Quisque nec lorem dolor. Nullam finibus dolor quis cursus tempus. Nulla nec massa ac enim posuere efficitur. Nam auctor turpis sagittis nulla semper varius ac sed nulla. Ut vitae neque.</figcaption>
                    </figure>
                </div>
            </section>
            <section className="links-to-used-tools-container">
                <h1>Linkler</h1>
                <ul>
                    <li className="anchor-li"><a className="link-anchor" href="https://react.dev">https://react.dev</a></li>
                    <li className="anchor-li"><a className="link-anchor" href="https://reactrouter.com">https://reactrouter.com</a></li>
                    <li className="anchor-li"><a className="link-anchor" href="https://www.chartjs.org">https://www.chartjs.org</a></li>
                    <li className="anchor-li"><a className="link-anchor" href="https://chatgpt.com">https://chatgpt.com</a></li>
                    <li className="anchor-li"><a className="link-anchor" href="https://unsplash.com">https://unsplash.com</a></li>
                    <li className="anchor-li"><a className="link-anchor" href="https://axios-http.com">https://axios-http.com</a></li>
                    <li className="anchor-li"   ><a className="link-anchor" href="https://cssgridgenerator.io">https://cssgridgenerator.io</a></li>
                </ul>
            </section>
        </div>
    )
}

export default Resources