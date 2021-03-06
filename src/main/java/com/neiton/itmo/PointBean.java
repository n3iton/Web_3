package com.neiton.itmo;

import java.sql.Timestamp;
import java.util.Date;
import javax.faces.context.FacesContext;

public class PointBean {

  private double X;
  private double Y;
  private double R = 2d;
  private Timestamp date = new Timestamp(new Date().getTime());

  public double getX() {
    return X;
  }

  public void setX(double x) {
    X = x;
  }

  public double getY() {
    return Y;
  }

  public void setY(double y) {
    Y = y;
  }

  public double getR() {
    return R;
  }

  public void setR(double r) {
    R = r;
  }

  public Timestamp getDate() {
    return date;
  }

  public void setDate(Timestamp date) {
    this.date = date;
  }

  public boolean getResult() {
    boolean result = false;
    if (X <= 0 && Y <= 0)
      result = (Math.abs(X) <= R) && (Math.abs(Y) <= R);
    else if (X <= 0 && Y >= 0)
      result = (R + X >= 2 * Y);
    else if (X >= 0 && Y <= 0)
      result = Math.sqrt(X * X + Y * Y) <= R;

    return result;
  }
}
