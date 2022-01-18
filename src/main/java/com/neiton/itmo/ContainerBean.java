package com.neiton.itmo;

import javax.faces.bean.ApplicationScoped;
import javax.faces.bean.ManagedBean;

@ManagedBean
@ApplicationScoped
public class ContainerBean {

  private PointBean pointBean = new PointBean();

  public PointBean getPointBean() {
    return pointBean;
  }

  public void setPointBean(PointBean pointBean) {
    this.pointBean = pointBean;
  }
}
