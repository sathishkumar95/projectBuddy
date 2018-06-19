/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/7.0.47
 * Generated at: 2018-06-12 12:35:46 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.WEB_002dINF.views;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class index_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final javax.servlet.jsp.JspFactory _jspxFactory =
          javax.servlet.jsp.JspFactory.getDefaultFactory();

  private static java.util.Map<java.lang.String,java.lang.Long> _jspx_dependants;

  private javax.el.ExpressionFactory _el_expressionfactory;
  private org.apache.tomcat.InstanceManager _jsp_instancemanager;

  public java.util.Map<java.lang.String,java.lang.Long> getDependants() {
    return _jspx_dependants;
  }

  public void _jspInit() {
    _el_expressionfactory = _jspxFactory.getJspApplicationContext(getServletConfig().getServletContext()).getExpressionFactory();
    _jsp_instancemanager = org.apache.jasper.runtime.InstanceManagerFactory.getInstanceManager(getServletConfig());
  }

  public void _jspDestroy() {
  }

  public void _jspService(final javax.servlet.http.HttpServletRequest request, final javax.servlet.http.HttpServletResponse response)
        throws java.io.IOException, javax.servlet.ServletException {

    final javax.servlet.jsp.PageContext pageContext;
    javax.servlet.http.HttpSession session = null;
    final javax.servlet.ServletContext application;
    final javax.servlet.ServletConfig config;
    javax.servlet.jsp.JspWriter out = null;
    final java.lang.Object page = this;
    javax.servlet.jsp.JspWriter _jspx_out = null;
    javax.servlet.jsp.PageContext _jspx_page_context = null;


    try {
      response.setContentType("text/html");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;

      out.write("<!DOCTYPE HTML>\n");
      out.write("<html lang=\"en\">\n");
      out.write("    <head>\n");
      out.write("        <!--=============== basic  ===============-->\n");
      out.write("        <meta charset=\"UTF-8\">\n");
      out.write("        <!--=============== scripts  ===============-->\n");
      out.write("        <script type=\"text/javascript\" src=\"/resources/js/jquery.min.js\"></script>\n");
      out.write("        <script type=\"text/javascript\" src=\"/resources/js/plugins.js\"></script>\n");
      out.write("        <script type=\"text/javascript\" src=\"/resources/js/scripts.js\"></script>\n");
      out.write("        <title>Sathish - Personal Portfolio</title>\n");
      out.write("        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no\">\n");
      out.write("        <meta name=\"robots\" content=\"index, follow\"/>\n");
      out.write("        <meta name=\"keywords\" content=\"\"/>\n");
      out.write("        <meta name=\"description\" content=\"\"/>\n");
      out.write("        <!--=============== css  ===============-->\n");
      out.write("        <link type=\"text/css\" rel=\"stylesheet\" href=\"/resources/css/reset.css\">\n");
      out.write("        <link type=\"text/css\" rel=\"stylesheet\" href=\"/resources/css/plugins.css\">\n");
      out.write("        <link type=\"text/css\" rel=\"stylesheet\" href=\"/resources/css/style.css\">\n");
      out.write("        <link type=\"text/css\" rel=\"stylesheet\" href=\"/resources/css/color.css\">\n");
      out.write("        <!--=============== favicons ===============-->\n");
      out.write("        <link rel=\"shortcut icon\" href=\"images/favicon.ico\">\n");
      out.write("    </head>\n");
      out.write("    <body>\n");
      out.write("        <!--loader-->\n");
      out.write("        <div class=\"loader-wrap\">\n");
      out.write("            <div class=\"pin\"></div>\n");
      out.write("        </div>\n");
      out.write("        <!--loader end-->\n");
      out.write("        <!-- Main  -->\n");
      out.write("        <div id=\"main\">\n");
      out.write("            <div class=\"body-bg\"></div>\n");
      out.write("            <!--landing-hero-container-->\n");
      out.write("            <div class=\"landing-hero-container fl-wrap full-height\">\n");
      out.write("                <div class=\"landing-logo\"><img src=\"images/logo.png\" alt=\"\"></div>\n");
      out.write("                <div class=\"landing-hero-text \">\n");
      out.write("                    <div class=\"landing-hero-text-block\">\n");
      out.write("                        <h1>Sathish</h1>\n");
      out.write("                        <h3>Creative Responsive Personal Portfolio for : <br> Designers, Musicians, Video producers, Architects, Photographers, etc.</h3>\n");
      out.write("                        <a href=\"#sec2\" class=\"custom-scroll-link btn float-btn flat-btn color-btn mar-top\">View Demos</a>\n");
      out.write("                    </div>\n");
      out.write("                </div>\n");
      out.write("                <div class=\"sec-lines\"></div>\n");
      out.write("                <div class=\"bg\"  data-bg=\"images/bg/bg.png\"></div>\n");
      out.write("                <div class=\"scroll-down-dec\">\n");
      out.write("                    <div class=\"scroll-down-wrap\">\n");
      out.write("                        <div class=\"mousey\">\n");
      out.write("                            <div class=\"scroller\"></div>\n");
      out.write("                        </div>\n");
      out.write("                        <span>Scroll Down</span>\n");
      out.write("                    </div>\n");
      out.write("                </div>\n");
      out.write("            </div>\n");
      out.write("            <!--landing-hero-container end-->\n");
      out.write("            <!--landing-hero end-->\n");
      out.write("            <div class=\"content landing-content\">\n");
      out.write("                <!-- section  -->\n");
      out.write("                <section data-scrollax-parent=\"true\" class=\"dark-bg\" id=\"sec2\">\n");
      out.write("                    <div class=\"section-subtitle\"  data-scrollax=\"properties: { translateY: '-150px' }\" >Home Demos<span>//</span></div>\n");
      out.write("                    <div class=\"container\">\n");
      out.write("                        <!--parallax-item -->\n");
      out.write("                        <div class=\"parallax-item nth_chid  fl-wrap\" data-scrollax-parent=\"true\">\n");
      out.write("                            <div class=\"row\">\n");
      out.write("                                <div class=\"col-md-7\">\n");
      out.write("                                    <a href=\"site/index.html\" target=\"_blank\"><img  src=\"images/bg/1.jpg\"   alt=\"\"></a>\n");
      out.write("                                </div>\n");
      out.write("                                <div class=\"col-md-5\"></div>\n");
      out.write("                            </div>\n");
      out.write("                            <div class=\"parallax-item-number rg-num\">.01</div>\n");
      out.write("                            <h3><a href=\"site/index.html\" target=\"_blank\">Half Slider</a></h3>\n");
      out.write("                        </div>\n");
      out.write("                        <!--parallax-item end-->\n");
      out.write("                        <div class=\"paralax-sec-separator fl-wrap\"></div>\n");
      out.write("                        <!--parallax-item -->\n");
      out.write("                        <div class=\"parallax-item fl-wrap\" data-scrollax-parent=\"true\">\n");
      out.write("                            <div class=\"row\">\n");
      out.write("                                <div class=\"col-md-5\"></div>\n");
      out.write("                                <div class=\"col-md-7\">\n");
      out.write("                                    <a href=\"site/index2.html\" target=\"_blank\"> <img  src=\"images/bg/2.jpg\"   alt=\"\"></a>\n");
      out.write("                                </div>\n");
      out.write("                            </div>\n");
      out.write("                            <h3><a href=\"site/index2.html\" target=\"_blank\">Half Image</a></h3>\n");
      out.write("                            <div class=\"parallax-item-number lf-num\">02.</div>\n");
      out.write("                        </div>\n");
      out.write("                        <!--parallax-item end-->\n");
      out.write("                        <div class=\"paralax-sec-separator fl-wrap\"></div>\n");
      out.write("                        <!--parallax-item -->\n");
      out.write("                        <div class=\"parallax-item nth_chid  fl-wrap\" data-scrollax-parent=\"true\">\n");
      out.write("                            <div class=\"row\">\n");
      out.write("                                <div class=\"col-md-7\">\n");
      out.write("                                    <a href=\"site/index3.html\" target=\"_blank\"><img  src=\"images/bg/3.jpg\"   alt=\"\"></a>\n");
      out.write("                                </div>\n");
      out.write("                                <div class=\"col-md-5\"></div>\n");
      out.write("                            </div>\n");
      out.write("                            <h3><a href=\"site/index3.html\" target=\"_blank\">Impulse image</a></h3>\n");
      out.write("                            <div class=\"parallax-item-number rg-num\">.03</div>\n");
      out.write("                        </div>\n");
      out.write("                        <!--parallax-item end-->\n");
      out.write("                        <div class=\"paralax-sec-separator fl-wrap\"></div>\n");
      out.write("                        <!--parallax-item -->\n");
      out.write("                        <div class=\"parallax-item fl-wrap\" data-scrollax-parent=\"true\">\n");
      out.write("                            <div class=\"row\">\n");
      out.write("                                <div class=\"col-md-5\"></div>\n");
      out.write("                                <div class=\"col-md-7\">\n");
      out.write("                                    <a href=\"site/index4.html\" target=\"_blank\"><img  src=\"images/bg/4.jpg\"   alt=\"\"></a>\n");
      out.write("                                </div>\n");
      out.write("                            </div>\n");
      out.write("                            <h3><a href=\"site/index4.html\" target=\"_blank\">Fullscreen Image</a></h3>\n");
      out.write("                            <div class=\"parallax-item-number lf-num\">04.</div>\n");
      out.write("                        </div>\n");
      out.write("                        <!--parallax-item end-->\n");
      out.write("                        <div class=\"paralax-sec-separator fl-wrap\"></div>\n");
      out.write("                        <!--parallax-item -->\n");
      out.write("                        <div class=\"parallax-item nth_chid  fl-wrap\" data-scrollax-parent=\"true\">\n");
      out.write("                            <div class=\"row\">\n");
      out.write("                                <div class=\"col-md-7\">\n");
      out.write("                                    <a href=\"site/index5.html\" target=\"_blank\"><img  src=\"images/bg/5.jpg\"   alt=\"\"></a>\n");
      out.write("                                </div>\n");
      out.write("                                <div class=\"col-md-5\"></div>\n");
      out.write("                            </div>\n");
      out.write("                            <h3><a href=\"site/index5.html\" target=\"_blank\">Fullscreen Slider</a></h3>\n");
      out.write("                            <div class=\"parallax-item-number rg-num\">.05</div>\n");
      out.write("                        </div>\n");
      out.write("                        <!--parallax-item end-->\n");
      out.write("                        <div class=\"paralax-sec-separator fl-wrap\"></div>\n");
      out.write("                        <!--parallax-item -->\n");
      out.write("                        <div class=\"parallax-item fl-wrap\" data-scrollax-parent=\"true\">\n");
      out.write("                            <div class=\"row\">\n");
      out.write("                                <div class=\"col-md-5\"></div>\n");
      out.write("                                <div class=\"col-md-7\">\n");
      out.write("                                    <a href=\"site/index6.html\" target=\"_blank\"><img  src=\"images/bg/6.jpg\"   alt=\"\"></a>\n");
      out.write("                                </div>\n");
      out.write("                            </div>\n");
      out.write("                            <h3><a href=\"site/index6.html\" target=\"_blank\">Slideshow</a></h3>\n");
      out.write("                            <div class=\"parallax-item-number lf-num\">06.</div>\n");
      out.write("                        </div>\n");
      out.write("                        <!--parallax-item end-->\n");
      out.write("                        <div class=\"paralax-sec-separator fl-wrap\"></div>\n");
      out.write("                        <!--parallax-item -->\n");
      out.write("                        <div class=\"parallax-item nth_chid  fl-wrap\" data-scrollax-parent=\"true\">\n");
      out.write("                            <div class=\"row\">\n");
      out.write("                                <div class=\"col-md-7\">\n");
      out.write("                                    <a href=\"site/index7.html\" target=\"_blank\"> <img  src=\"images/bg/7.jpg\"   alt=\"\"></a>\n");
      out.write("                                </div>\n");
      out.write("                                <div class=\"col-md-5\"> </div>\n");
      out.write("                            </div>\n");
      out.write("                            <h3><a href=\"site/index7.html\" target=\"_blank\">Fullscreen Carousel</a></h3>\n");
      out.write("                            <div class=\"parallax-item-number rg-num\">.07</div>\n");
      out.write("                        </div>\n");
      out.write("                        <!--parallax-item end-->\n");
      out.write("                        <div class=\"paralax-sec-separator fl-wrap\"></div>\n");
      out.write("                        <!--parallax-item -->\n");
      out.write("                        <div class=\"parallax-item fl-wrap\" data-scrollax-parent=\"true\">\n");
      out.write("                            <div class=\"row\">\n");
      out.write("                                <div class=\"col-md-5\"></div>\n");
      out.write("                                <div class=\"col-md-7\">\n");
      out.write("                                    <a href=\"site/index8.html\" target=\"_blank\"> <img  src=\"images/bg/8.jpg\"   alt=\"\"></a>\n");
      out.write("                                </div>\n");
      out.write("                            </div>\n");
      out.write("                            <h3><a href=\"site/index8.html\" target=\"_blank\">Video</a></h3>\n");
      out.write("                            <div class=\"parallax-item-number lf-num\">08.</div>\n");
      out.write("                        </div>\n");
      out.write("                        <!--parallax-item end-->\n");
      out.write("                        <div class=\"paralax-sec-separator fl-wrap\"></div>\n");
      out.write("                    </div>\n");
      out.write("                    <div class=\"sec-lines\"></div>\n");
      out.write("                </section>\n");
      out.write("                <!-- section-->\n");
      out.write("            </div>\n");
      out.write("            <!-- footer-->\n");
      out.write("            <div class=\"height-emulator fl-wrap\"></div>\n");
      out.write("            <footer class=\"main-footer fixed-footer landing-footer\">\n");
      out.write("                <!--footer-inner-->\n");
      out.write("                <div class=\"footer-inner fl-wrap\">\n");
      out.write("                    <div class=\"container\">\n");
      out.write("                        <div class=\"partcile-dec\" data-parcount=\"140\"></div>\n");
      out.write("                        <div class=\"landing-inner fl-wrap\">\n");
      out.write("                            <h2>Start Your Website Today</h2>\n");
      out.write("                            <h4>Creative Powerful Portfolios , Audio Player , FontAwesone 5PRO , Incredible Parallax Effects ,  Instagram Feed ,  Twitter Feed , Working Ajax  Contact and Subscribe Form , Coming Soon Page , and more ... </h4>\n");
      out.write("                            <a href=\"#\" class=\"btn float-btn trsp-btn\" target=\"_blank\">Buy Solonick 10$</a>\n");
      out.write("                        </div>\n");
      out.write("                    </div>\n");
      out.write("                </div>\n");
      out.write("                <!--footer-inne endr-->\n");
      out.write("            </footer>\n");
      out.write("            <!-- footer end-->\n");
      out.write("        </div>\n");
      out.write("        <!-- Main end -->\n");
      out.write("    </body>\n");
      out.write("</html>");
    } catch (java.lang.Throwable t) {
      if (!(t instanceof javax.servlet.jsp.SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          try { out.clearBuffer(); } catch (java.io.IOException e) {}
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
        else throw new ServletException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }
}
