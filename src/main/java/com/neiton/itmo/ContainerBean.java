package com.neiton.itmo;

import java.util.ArrayList;
import javax.faces.bean.ApplicationScoped;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.ManagedProperty;
import javax.faces.bean.SessionScoped;

@ManagedBean(name = "containerBean")
@SessionScoped
public class ContainerBean {

  @ManagedProperty(value = "#{SQLSaver}")
  private SQLSaver saver;

  @ManagedProperty(value = "#{SQLInputReader}")
  private SQLInputReader reader;

  private PointBean pointBean = new PointBean();

  private ArrayList<PointBean> points;

  public void addPoint() {
    if (points == null)
      points = reader.sqlCollect(new ArrayList<>());
    points.add(pointBean);
    saver.sqlWrite(pointBean);
    pointBean = new PointBean();
  }

  public ArrayList<PointBean> getPoints() {
    points = reader.sqlCollect(new ArrayList<>());
    return points;
  }

  public void setPoints(ArrayList<PointBean> points) {
    this.points = points;
  }

  public PointBean getPointBean() {
    return pointBean;
  }

  public void setPointBean(PointBean pointBean) {
    this.pointBean = pointBean;
  }

  public SQLSaver getSaver() {
    return saver;
  }

  public void setSaver(SQLSaver saver) {
    this.saver = saver;
  }

  public SQLInputReader getReader() {
    return reader;
  }

  public void setReader(SQLInputReader reader) {
    this.reader = reader;
  }
}
