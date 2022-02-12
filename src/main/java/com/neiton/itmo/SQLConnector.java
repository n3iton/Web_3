package com.neiton.itmo;


import java.sql.Connection;
import java.sql.SQLException;
import javax.annotation.Resource;
import javax.faces.bean.ApplicationScoped;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import javax.sql.DataSource;

@ManagedBean(name = "SQLConnector")
@SessionScoped
public class SQLConnector {
  @Resource(lookup = "java:/PostgresDS")
  private DataSource dataSource;

  public Connection getConnection() {
    try {
      return dataSource.getConnection();
    } catch (SQLException e) {
      e.printStackTrace();
      return null;
    }
  }

  public DataSource getDataSource() {
    return dataSource;
  }

  public void setDataSource(DataSource dataSource) {
    this.dataSource = dataSource;
  }
}
