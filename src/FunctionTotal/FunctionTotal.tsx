import { any } from "prop-types";
import React from "react";

export async function cpnLoadData(url: string) {
  await fetch(url, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      return json;
    })
    .catch((err) => {
      return { "errorDev:": err };
    });
}

/* 
    Chuyen ngay hien tai thanh dinh dang full yyyy-mm-dd,
    Dung trong Mysql tra ve chuoi
    */
export function cpnGetDateNow() {
  const datenow2 = new Date();
  const year = datenow2.getFullYear();
  let month: any = datenow2.getMonth();
  month = Number(month) + 1;
  if (month <= 9) {
    month = "0" + month;
  }
  let date: any = datenow2.getDate();
  date = Number(date);
  if (date <= 9) {
    date = "0" + date;
  }
  const dateStr = `${year}-${month}-${date}`;
  return dateStr;
}

/* 
    Luu password
    */
export function cpnSetPassWord(passWord: any) {
  localStorage.setItem("passWord", passWord);
}
/* 
    Lay password
    */
export function cpnGetPassWord() {
  const pass = localStorage.getItem("passWord");
  return pass;
}
/* 
    khoa app
    */
export function cpnLock() {
  localStorage.setItem("lock", "true");
}
/* 
    Mo khoa app
    */
export function cpnUnLock() {
  localStorage.setItem("lock", "false");
}
/* 
    Mo khoa app
    */
export function cpnGetLock() {
  const lock = localStorage.getItem("lock");
  return lock;
}

/* 
    Tao so ngau nhien
    */
export function cpnGetRandomNum() {
  return "tao so ngau nhien";
}

export default function FunctionTotal() {
  return (
    <>
      <div>FunctionTotal</div>
    </>
  );
}
