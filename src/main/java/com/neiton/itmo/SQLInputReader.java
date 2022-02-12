package com.neiton.itmo;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.Timestamp;
import java.util.ArrayList;
import javax.faces.bean.ApplicationScoped;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.ManagedProperty;
import javax.faces.bean.SessionScoped;

@ManagedBean(name = "SQLInputReader")
@SessionScoped
public class SQLInputReader {

  @ManagedProperty(value = "#{SQLConnector}")
  private SQLConnector connector;

  public ArrayList<PointBean> sqlCollect(ArrayList<PointBean> points) {
   try (Connection connection = connector.getConnection();
     Statement statement = connection.createStatement();
     ResultSet rs = statement.executeQuery("SELECT * FROM points")) {

     while (rs.next()) {
       double x = rs.getDouble("x");
       double y = rs.getDouble("y");
       double r = rs.getDouble("r");
       Timestamp date = rs.getTimestamp("date");

       PointBean point = new PointBean();
       point.setX(x);
       point.setY(y);
       point.setR(r);
       point.setDate(date);
       points.add(point);
     }
   } catch (SQLException e) {
     e.printStackTrace();
   }
   return points;
  }

  public SQLConnector getConnector() {
    return connector;
  }

  public void setConnector(SQLConnector connector) {
    this.connector = connector;
  }
}
