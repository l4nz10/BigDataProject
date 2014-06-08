package servlets;

import java.io.IOException;
import javax.servlet.http.*;

@SuppressWarnings("serial")
public class SearchServlet extends HttpServlet {
	
	public void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {
		System.out.println(req.getQueryString());
		resp.setContentType("text/plain");
		resp.getWriter().println("Hello, world");
	}
}
