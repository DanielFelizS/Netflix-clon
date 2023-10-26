// import React from 'react'
import request from "../Request"
import Main from "../components/Main"
import Row from "../components/Row"

export const Home = () => {
  return (
    <>
    <Main/>
    <Row rowID="1" title="Up Coming" fetchUrl = {request.requestUpcoming}/>
    <Row rowID="2" title="Trending" fetchUrl = {request.requestTrending}/>
    <Row rowID="3" title="Top Rated" fetchUrl = {request.requestTopRated}/>
    </>
  )
}
