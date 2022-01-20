package com.neiton.itmo;

import java.util.ArrayList;
import javax.faces.bean.ApplicationScoped;
import javax.faces.bean.ManagedBean;

@ManagedBean(name = "containerBean")
@ApplicationScoped
public class ContainerBean {

  private PointBean pointBean = new PointBean();

  private ArrayList<PointBean> points;

  public void addPoint() {
    if (points == null)
      points = new ArrayList<>();
    points.add(pointBean);
    pointBean = new PointBean();
  }

  public ArrayList<PointBean> getPoints() {
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
}
