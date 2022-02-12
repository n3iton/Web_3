package com.neiton.itmo;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.ArrayList;
import javax.faces.bean.ApplicationScoped;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.ManagedProperty;
import javax.faces.bean.SessionScoped;

@ManagedBean(name = "SQLSaver")
@SessionScoped
public class SQLSaver {

  @ManagedProperty(value = "#{SQLConnector}")
  private SQLConnector connector;

  public void sqlWrite(ArrayList<PointBean> points) {
    try (Connection connection = connector.getConnection()) {
      for (PointBean point : points)
        prepareStatement(point, connection);
    } catch (SQLException e) {
      System.out.println("Error with writing");
    }
  }

  public void sqlWrite(PointBean point) {
    try (Connection connection = connector.getConnection()) {
      prepareStatement(point, connection);
    } catch (SQLException e) {
      e.printStackTrace();
      System.out.println("Error with writing");
    }
  }

  private void prepareStatement(PointBean i, Connection connection) throws SQLException {
    PreparedStatement statement = connection.prepareStatement("INSERT INTO points values (?, ?, ?, ?, ?);");
    statement.setDouble(1, i.getX());
    statement.setDouble(2, i.getY());
    statement.setDouble(3, i.getR());
    statement.setBoolean(4, i.getResult());
    statement.setTimestamp(5, i.getDate());
    statement.execute();
  }

  public SQLConnector getConnector() {
    return connector;
  }

  public void setConnector(SQLConnector connector) {
    this.connector = connector;
  }
}
