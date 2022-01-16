package com.neiton.itmo;

import java.io.Serializable;
import javax.faces.bean.ManagedBean;

@ManagedBean(name = "SliderX", eager = true)
public class XSliderBean implements Serializable {
  private int sliderValue;

  public int getSliderValue() {
    return sliderValue;
  }

  public void setSliderValue(int sliderValue) {
    this.sliderValue = sliderValue;
  }
}

