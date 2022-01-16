package com.neiton.itmo;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import javax.faces.bean.ApplicationScoped;
import javax.faces.bean.ManagedBean;
import lombok.Data;

@Data
@ManagedBean(name = "clock", eager = true)
@ApplicationScoped
public class ClockBean implements Serializable {
  DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern("HH:mm:ss dd.MM.yyyy");
  LocalDateTime localDateTime;

  public String getLocalDate() {
    return localDateTime.now().format(dateTimeFormatter);
  }
}
