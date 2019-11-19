import React from 'react';

const QtcTable = ({checkQtc}) => {
    return (
        <table id="mouse" cellSpacing="0" style={{margin: '0 auto'}}>
                <tbody>
                <tr>
                  <th style={{"fontSize" : "8px"}}>small boxes</th>
                  <th>7</th>
                  <th>7.5</th>
                  <th>8</th>
                  <th>8.5</th>
                  <th>9</th>
                  <th>9.5</th>
                  <th>10</th>
                  <th>10.5</th>
                  <th>11</th>
                  <th>11.5</th>
                  <th>12</th>
                  <th>12.5</th>
                  <th>13</th>
                  <th>13.5</th>
                  <th>14</th>
                </tr>
                <tr>
                <th style={{"fontSize" : "8px"}}>HR | QT</th>
                  <th>0.28</th>
                  <th>0.30</th>
                  <th>0.32</th>
                  <th>0.34</th>
                  <th>0.36</th>
                  <th>0.38</th>
                  <th>0.40</th>
                  <th>0.42</th>
                  <th>0.44</th>
                  <th>0.46</th>
                  <th>0.48</th>
                  <th>0.50</th>
                  <th>0.52</th>
                  <th>0.54</th>
                  <th>0.56</th>
                </tr>
                <tr>
                  <th>40</th>
                  <td className="green" onClick={() => checkQtc(40, 0.28, 229)}>229</td>
                  <td className="green" onClick={() => checkQtc(40, 0.30, 245)}>245</td>
                  <td className="green" onClick={() => checkQtc(40, 0.32, 261)}>261</td>
                  <td className="green" onClick={() => checkQtc(40, 0.34, 278)}>278</td>
                  <td className="green" onClick={() => checkQtc(40, 0.36, 294)}>294</td>
                  <td className="green" onClick={() => checkQtc(40, 0.38, 310)}>310</td>
                  <td className="green" onClick={() => checkQtc(40, 0.40, 327)}>327</td>
                  <td className="green" onClick={() => checkQtc(40, 0.42, 343)}>343</td>
                  <td className="green" onClick={() => checkQtc(40, 0.44, 359)}>359</td>
                  <td className="green" onClick={() => checkQtc(40, 0.46, 376)}>376</td>
                  <td className="green" onClick={() => checkQtc(40, 0.48, 392)}>392</td>
                  <td className="green" onClick={() => checkQtc(40, 0.50, 408)}>408</td>
                  <td className="green" onClick={() => checkQtc(40, 0.52, 425)}>425</td>
                  <td className="green" onClick={() => checkQtc(40, 0.54, 441)}>441</td>
                  <td className="yellow" onClick={() => checkQtc(40, 0.56, 457)}>457</td>
                </tr>
                <tr>
                  <th>45</th>
                  <td className="green" onClick={() => checkQtc(45, 0.28, 242)}>242</td>
                  <td className="green" onClick={() => checkQtc(45, 0.30, 260)}>260</td>
                  <td className="green" onClick={() => checkQtc(45, 0.32, 277)}>277</td>
                  <td className="green" onClick={() => checkQtc(45, 0.34, 294)}>294</td>
                  <td className="green" onClick={() => checkQtc(45, 0.36, 312)}>312</td>
                  <td className="green" onClick={() => checkQtc(45, 0.38, 329)}>329</td>
                  <td className="green" onClick={() => checkQtc(45, 0.40, 346)}>346</td>
                  <td className="green" onClick={() => checkQtc(45, 0.42, 364)}>364</td>
                  <td className="green" onClick={() => checkQtc(45, 0.44, 381)}>381</td>
                  <td className="green" onClick={() => checkQtc(45, 0.46, 398)}>398</td>
                  <td className="green" onClick={() => checkQtc(45, 0.48, 416)}>416</td>
                  <td className="green" onClick={() => checkQtc(45, 0.50, 433)}>433</td>
                  <td className="yellow" onClick={() => checkQtc(45, 0.52, 450)}>450</td>
                  <td className="yellow" onClick={() => checkQtc(45, 0.54, 468)}>468</td>
                  <td className="yellow" onClick={() => checkQtc(45, 0.56, 485)}>485</td>
                </tr>
                <tr>
                  <th>50</th>
                  <td className="green" onClick={() => checkQtc(50, 0.28 , 256)}>256</td>
                  <td className="green" onClick={() => checkQtc(50, 0.30, 274)}>274</td>
                  <td className="green" onClick={() => checkQtc(50, 0.32, 292)}>292</td>
                  <td className="green" onClick={() => checkQtc(50, 0.34, 310)}>310</td>
                  <td className="green" onClick={() => checkQtc(50, 0.36, 329)}>329</td>
                  <td className="green" onClick={() => checkQtc(50, 0.38, 347)}>347</td>
                  <td className="green" onClick={() => checkQtc(50, 0.40, 365)}>365</td>
                  <td className="green" onClick={() => checkQtc(50, 0.42, 383)}>383</td>
                  <td className="green" onClick={() => checkQtc(50, 0.44, 402)}>402</td>
                  <td className="green" onClick={() => checkQtc(50, 0.46, 420)}>420</td>
                  <td className="green" onClick={() => checkQtc(50, 0.48, 438)}>438</td>
                  <td className="yellow" onClick={() => checkQtc(50, 0.50, 456)}>456</td>
                  <td className="yellow" onClick={() => checkQtc(50, 0.52, 475)}>475</td>
                  <td className="yellow" onClick={() => checkQtc(50, 0.54, 493)}>493</td>
                  <td className="qtc-red" onClick={() => checkQtc(50, 0.56, 511)}>511</td>
                </tr>
                <tr>
                  <th>55</th>
                  <td className="green" onClick={() => checkQtc(55, 0.28, 268)}>268</td>
                  <td className="green" onClick={() => checkQtc(55, 0.30, 287)}>287</td>
                  <td className="green" onClick={() => checkQtc(55, 0.32, 306)}>306</td>
                  <td className="green" onClick={() => checkQtc(55, 0.34, 326)}>326</td>
                  <td className="green" onClick={() => checkQtc(55, 0.36, 345)}>345</td>
                  <td className="green" onClick={() => checkQtc(55, 0.38, 364)}>364</td>
                  <td className="green" onClick={() => checkQtc(55, 0.40, 383)}>383</td>
                  <td className="green" onClick={() => checkQtc(55, 0.42, 402)}>402</td>
                  <td className="green" onClick={() => checkQtc(55, 0.44, 421)}>421</td>
                  <td className="green" onClick={() => checkQtc(55, 0.46, 440)}>440</td>
                  <td className="yellow" onClick={() => checkQtc(55, 0.48, 460)}>460</td>
                  <td className="yellow" onClick={() => checkQtc(55, 0.50, 479)}>479</td>
                  <td className="yellow" onClick={() => checkQtc(55, 0.52, 498)}>498</td>
                  <td className="qtc-red" onClick={() => checkQtc(55, 0.54, 517)}>517</td>
                  <td className="qtc-red" onClick={() => checkQtc(55, 0.56, 536)}>536</td>
                </tr>
                <tr>
                  <th>60</th>
                  <td className="green" onClick={() => checkQtc(60, 0.28, 280)}>280</td>
                  <td className="green" onClick={() => checkQtc(60, 0.30, 300)}>300</td>
                  <td className="green" onClick={() => checkQtc(60, 0.32, 320)}>320</td>
                  <td className="green" onClick={() => checkQtc(60, 0.34, 340)}>340</td>
                  <td className="green" onClick={() => checkQtc(60, 0.36, 360)}>360</td>
                  <td className="green" onClick={() => checkQtc(60, 0.38, 380)}>380</td>
                  <td className="green" onClick={() => checkQtc(60, 0.40, 400)}>400</td>
                  <td className="green" onClick={() => checkQtc(60, 0.42, 420)}>420</td>
                  <td className="green" onClick={() => checkQtc(60, 0.44, 440)}>440</td>
                  <td className="yellow" onClick={() => checkQtc(60, 0.46, 460)}>460</td>
                  <td className="yellow" onClick={() => checkQtc(60, 0.48, 480)}>480</td>
                  <td className="qtc-red" onClick={() => checkQtc(60, 0.50, 500)}>500</td>
                  <td className="qtc-red" onClick={() => checkQtc(60, 0.52, 520)}>520</td>
                  <td className="qtc-red" onClick={() => checkQtc(60, 0.54, 540)}>540</td>
                  <td className="qtc-red" onClick={() => checkQtc(60, 0.56, 560)}>560</td>
                </tr>
                <tr>
                  <th>65</th>
                  <td className="green" onClick={() => checkQtc(65, 0.28, 291)}>291</td>
                  <td className="green" onClick={() => checkQtc(65, 0.30, 312)}>312</td>
                  <td className="green" onClick={() => checkQtc(65, 0.32, 333)}>333</td>
                  <td className="green" onClick={() => checkQtc(65, 0.34, 354)}>354</td>
                  <td className="green" onClick={() => checkQtc(65, 0.36, 375)}>375</td>
                  <td className="green" onClick={() => checkQtc(65, 0.38, 396)}>396</td>
                  <td className="green" onClick={() => checkQtc(65, 0.40, 416)}>416</td>
                  <td className="green" onClick={() => checkQtc(65, 0.42, 437)}>437</td>
                  <td className="yellow" onClick={() => checkQtc(65, 0.44, 458)}>458</td>
                  <td className="yellow" onClick={() => checkQtc(65, 0.46, 479)}>479</td>
                  <td className="qtc-red" onClick={() => checkQtc(65, 0.48, 500)}>500</td>
                  <td className="qtc-red" onClick={() => checkQtc(65, 0.50, 520)}>520</td>
                  <td className="qtc-red" onClick={() => checkQtc(65, 0.52, 541)}>541</td>
                  <td className="qtc-red" onClick={() => checkQtc(65, 0.54, 562)}>>562</td>
                  <td className="qtc-red" onClick={() => checkQtc(65, 0.56, 583)}>583</td>
                </tr>
                <tr>
                  <th>70</th>
                  <td className="green" onClick={() => checkQtc(70, 0.28, 302)}>302</td>
                  <td className="green" onClick={() => checkQtc(70, 0.30, 324)}>324</td>
                  <td className="green" onClick={() => checkQtc(70, 0.32, 346)}>346</td>
                  <td className="green" onClick={() => checkQtc(70, 0.34, 367)}>367</td>
                  <td className="green" onClick={() => checkQtc(70, 0.36, 389)}>389</td>
                  <td className="green" onClick={() => checkQtc(70, 0.38, 410)}>410</td>
                  <td className="green" onClick={() => checkQtc(70, 0.40, 432)}>432</td>
                  <td className="yellow" onClick={() => checkQtc(70, 0.42, 454)}>454</td>
                  <td className="yellow" onClick={() => checkQtc(70, 0.44, 475)}>475</td>
                  <td className="yellow" onClick={() => checkQtc(70, 0.46, 497)}>497</td>
                  <td className="qtc-red" onClick={() => checkQtc(70, 0.48, 518)}>518</td>
                  <td className="qtc-red" onClick={() => checkQtc(70, 0.50, 540)}>540</td>
                  <td className="qtc-red" onClick={() => checkQtc(70, 0.52, 562)}>562</td>
                  <td className="qtc-red" onClick={() => checkQtc(70, 0.54, 583)}>583</td>
                  <td className="qtc-red" onClick={() => checkQtc(70, 0.56, 605)}>605</td>
                </tr>
                <tr>
                  <th>75</th>
                  <td className="green" onClick={() => checkQtc(75, 0.28, 313)}>313</td>
                  <td className="green" onClick={() => checkQtc(75, 0.30, 335)}>335</td>
                  <td className="green" onClick={() => checkQtc(75, 0.32, 358)}>358</td>
                  <td className="green" onClick={() => checkQtc(75, 0.34, 380)}>380</td>
                  <td className="green" onClick={() => checkQtc(75, 0.36, 402)}>402</td>
                  <td className="green" onClick={() => checkQtc(75, 0.38, 425)}>425</td>
                  <td className="green" onClick={() => checkQtc(75, 0.40, 447)}>447</td>
                  <td className="yellow" onClick={() => checkQtc(75, 0.42, 470)}>470</td>
                  <td className="yellow" onClick={() => checkQtc(75, 0.44, 492)}>492</td>
                  <td className="qtc-red" onClick={() => checkQtc(75, 0.46, 514)}>514</td>
                  <td className="qtc-red" onClick={() => checkQtc(75, 0.48, 537)}>537</td>
                  <td className="qtc-red" onClick={() => checkQtc(75, 0.50, 559)}>559</td>
                  <td className="qtc-red" onClick={() => checkQtc(75, 0.52, 581)}>581</td>
                  <td className="qtc-red" onClick={() => checkQtc(75, 0.54, 604)}>604</td>
                  <td className="qtc-red" onClick={() => checkQtc(75, 0.56, 626)}>626</td>                
                </tr>
                <tr>
                  <th>80</th>
                  <td className="green" onClick={() => checkQtc(80, 0.28, 323)}>323</td>
                  <td className="green" onClick={() => checkQtc(80, 0.30, 346)}>346</td>
                  <td className="green" onClick={() => checkQtc(80, 0.32, 370)}>370</td>
                  <td className="green" onClick={() => checkQtc(80, 0.34, 393)}>393</td>
                  <td className="green" onClick={() => checkQtc(80, 0.36, 416)}>416</td>
                  <td className="green" onClick={() => checkQtc(80, 0.38, 439)}>439</td>
                  <td className="yellow" onClick={() => checkQtc(80, 0.40, 462)}>462</td>
                  <td className="yellow" onClick={() => checkQtc(80, 0.42, 485)}>485</td>
                  <td className="qtc-red" onClick={() => checkQtc(80, 0.44, 508)}>508</td>
                  <td className="qtc-red" onClick={() => checkQtc(80, 0.46, 531)}>531</td>
                  <td className="qtc-red" onClick={() => checkQtc(80, 0.48, 554)}>554</td>
                  <td className="qtc-red" onClick={() => checkQtc(80, 0.50, 577)}>577</td>
                  <td className="qtc-red" onClick={() => checkQtc(80, 0.52, 600)}>600</td>
                  <td className="qtc-red" onClick={() => checkQtc(80, 0.54, 624)}>624</td>
                  <td className="qtc-red" onClick={() => checkQtc(80, 0.56, 647)}>647</td>
                </tr>                
                <tr>
                  <th>85</th>
                  <td className="green" onClick={() => checkQtc(85, 0.28, 333)}>333</td>
                  <td className="green" onClick={() => checkQtc(85, 0.30, 357)}>357</td>
                  <td className="green" onClick={() => checkQtc(85, 0.32, 381)}>381</td>
                  <td className="green" onClick={() => checkQtc(85, 0.34, 405)}>405</td>
                  <td className="green" onClick={() => checkQtc(85, 0.36, 428)}>428</td>
                  <td className="yellow" onClick={() => checkQtc(85, 0.38, 452)}>452</td>
                  <td className="yellow" onClick={() => checkQtc(85, 0.40, 476)}>476</td>
                  <td className="qtc-red" onClick={() => checkQtc(85, 0.42, 500)}>500</td>
                  <td className="qtc-red" onClick={() => checkQtc(85, 0.44, 524)}>524</td>
                  <td className="qtc-red" onClick={() => checkQtc(85, 0.46, 548)}>548</td>
                  <td className="qtc-red" onClick={() => checkQtc(85, 0.48, 571)}>571</td>
                  <td className="qtc-red" onClick={() => checkQtc(85, 0.50, 595)}>595</td>
                  <td className="qtc-red" onClick={() => checkQtc(85, 0.52, 619)}>619</td>
                  <td className="qtc-red" onClick={() => checkQtc(85, 0.54, 643)}>643</td>
                  <td className="qtc-red" onClick={() => checkQtc(85, 0.56, 667)}>667</td>                
                </tr>
                <tr>
                  <th>90</th>
                  <td className="green" onClick={() => checkQtc(90, 0.28, 343)}>343</td>
                  <td className="green" onClick={() => checkQtc(90, 0.30, 367)}>367</td>
                  <td className="green" onClick={() => checkQtc(90, 0.32, 392)}>392</td>
                  <td className="green" onClick={() => checkQtc(90, 0.34, 416)}>416</td>
                  <td className="green" onClick={() => checkQtc(90, 0.36, 441)}>441</td>
                  <td className="yellow" onClick={() => checkQtc(90, 0.38, 465)}>465</td>
                  <td className="yellow" onClick={() => checkQtc(90, 0.40, 490)}>490</td>
                  <td className="qtc-red" onClick={() => checkQtc(90, 0.42, 514)}>514</td>
                  <td className="qtc-red" onClick={() => checkQtc(90, 0.44, 539)}>539</td>
                  <td className="qtc-red" onClick={() => checkQtc(90, 0.46, 563)}>563</td>
                  <td className="qtc-red" onClick={() => checkQtc(90, 0.48, 588)}>588</td>
                  <td className="qtc-red" onClick={() => checkQtc(90, 0.50, 612)}>612</td>
                  <td className="qtc-red" onClick={() => checkQtc(90, 0.52, 637)}>637</td>
                  <td className="qtc-red" onClick={() => checkQtc(90, 0.54, 661)}>661</td>
                  <td className="qtc-red" onClick={() => checkQtc(90, 0.56, 686)}>686</td>
                </tr>                
                <tr>
                  <th>95</th>
                  <td className="green" onClick={() => checkQtc(95, 0.28, 352)}>352</td>
                  <td className="green" onClick={() => checkQtc(95, 0.30, 377)}>377</td>
                  <td className="green" onClick={() => checkQtc(95, 0.32, 403)}>403</td>
                  <td className="green" onClick={() => checkQtc(95, 0.34, 428)}>428</td>
                  <td className="yellow" onClick={() => checkQtc(95, 0.36, 453)}>453</td>
                  <td className="yellow" onClick={() => checkQtc(95, 0.38, 478)}>478</td>
                  <td className="qtc-red" onClick={() => checkQtc(95, 0.40, 503)}>503</td>
                  <td className="qtc-red" onClick={() => checkQtc(95, 0.42, 528)}>528</td>
                  <td className="qtc-red" onClick={() => checkQtc(95, 0.44, 554)}>554</td>
                  <td className="qtc-red" onClick={() => checkQtc(95, 0.46, 579)}>579</td>
                  <td className="qtc-red" onClick={() => checkQtc(95, 0.48, 604)}>604</td>
                  <td className="qtc-red" onClick={() => checkQtc(95, 0.50, 629)}>629</td>
                  <td className="qtc-red" onClick={() => checkQtc(95, 0.52, 654)}>654</td>
                  <td className="qtc-red" onClick={() => checkQtc(95, 0.54, 679)}>679</td>
                  <td className="qtc-red" onClick={() => checkQtc(95, 0.56, 705)}>705</td>
                </tr>
                <tr>
                  <th>100</th>
                  <td className="green" onClick={() => checkQtc(100, 0.28, 361)}>361</td>
                  <td className="green" onClick={() => checkQtc(100, 0.30, 387)}>387</td>
                  <td className="green" onClick={() => checkQtc(100, 0.32, 413)}>413</td>
                  <td className="green" onClick={() => checkQtc(100, 0.34, 439)}>439</td>
                  <td className="yellow" onClick={() => checkQtc(100, 0.36, 465)}>465</td>
                  <td className="yellow" onClick={() => checkQtc(100, 0.38, 491)}>491</td>
                  <td className="qtc-red" onClick={() => checkQtc(100, 0.40, 516)}>516</td>
                  <td className="qtc-red" onClick={() => checkQtc(100, 0.42, 542)}>542</td>
                  <td className="qtc-red" onClick={() => checkQtc(100, 0.44, 568)}>568</td>
                  <td className="qtc-red" onClick={() => checkQtc(100, 0.46, 594)}>594</td>
                  <td className="qtc-red" onClick={() => checkQtc(100, 0.48, 620)}>620</td>
                  <td className="qtc-red" onClick={() => checkQtc(100, 0.50, 645)}>645</td>
                  <td className="qtc-red" onClick={() => checkQtc(100, 0.52, 671)}>671</td>
                  <td className="qtc-red" onClick={() => checkQtc(100, 0.54, 697)}>697</td>
                  <td className="qtc-red" onClick={() => checkQtc(100, 0.56, 723)}>723</td>
                </tr>
                <tr>
                  <th>105</th>
                  <td className="green" onClick={() => checkQtc(105, 0.28, 370)}>370</td>
                  <td className="green" onClick={() => checkQtc(105, 0.30, 397)}>397</td>
                  <td className="green" onClick={() => checkQtc(105, 0.32, 423)}>423</td>
                  <td className="yellow" onClick={() => checkQtc(105, 0.34, 450)}>450</td>
                  <td className="yellow" onClick={() => checkQtc(105, 0.36, 476)}>476</td>
                  <td className="qtc-red" onClick={() => checkQtc(105, 0.38, 503)}>503</td>
                  <td className="qtc-red" onClick={() => checkQtc(105, 0.40, 529)}>529</td>
                  <td className="qtc-red" onClick={() => checkQtc(105, 0.42, 556)}>556</td>
                  <td className="qtc-red" onClick={() => checkQtc(105, 0.44, 582)}>582</td>
                  <td className="qtc-red" onClick={() => checkQtc(105, 0.46, 609)}>609</td>
                  <td className="qtc-red" onClick={() => checkQtc(105, 0.48, 635)}>635</td>
                  <td className="qtc-red" onClick={() => checkQtc(105, 0.50, 661)}>661</td>
                  <td className="qtc-red" onClick={() => checkQtc(105, 0.52, 688)}>688</td>
                  <td className="qtc-red" onClick={() => checkQtc(105, 0.54, 714)}>714</td>
                  <td className="qtc-red" onClick={() => checkQtc(105, 0.56, 741)}>741</td>
                </tr> 
                <tr>
                  <th>110</th>
                  <td className="green" onClick={() => checkQtc(110, 0.28, 379)}>379</td>
                  <td className="green" onClick={() => checkQtc(110, 0.30, 406)}>406</td>
                  <td className="green" onClick={() => checkQtc(110, 0.32, 433)}>433</td>
                  <td className="yellow" onClick={() => checkQtc(110, 0.34, 460)}>460</td>
                  <td className="yellow" onClick={() => checkQtc(110, 0.36, 487)}>487</td>
                  <td className="qtc-red" onClick={() => checkQtc(110, 0.38, 515)}>515</td>
                  <td className="qtc-red" onClick={() => checkQtc(110, 0.40, 542)}>542</td>
                  <td className="qtc-red" onClick={() => checkQtc(110, 0.42, 569)}>569</td>
                  <td className="qtc-red" onClick={() => checkQtc(110, 0.44, 596)}>596</td>
                  <td className="qtc-red" onClick={() => checkQtc(110, 0.46, 623)}>623</td>
                  <td className="qtc-red" onClick={() => checkQtc(110, 0.48, 650)}>650</td>
                  <td className="qtc-red" onClick={() => checkQtc(110, 0.50, 677)}>677</td>
                  <td className="qtc-red" onClick={() => checkQtc(110, 0.52, 704)}>704</td>
                  <td className="qtc-red" onClick={() => checkQtc(110, 0.54, 731)}>731</td>
                  <td className="qtc-red" onClick={() => checkQtc(110, 0.56, 758)}>758</td>
                </tr>
                <tr>
                  <th>115</th>
                  <td className="green" onClick={() => checkQtc(115, 0.28, 388)}>388</td>
                  <td className="green" onClick={() => checkQtc(115, 0.30, 415)}>415</td>
                  <td className="green" onClick={() => checkQtc(115, 0.32, 443)}>443</td>
                  <td className="yellow" onClick={() => checkQtc(115, 0.34, 471)}>471</td>
                  <td className="yellow" onClick={() => checkQtc(115, 0.36, 498)}>498</td>
                  <td className="qtc-red" onClick={() => checkQtc(115, 0.38, 526)}>526</td>
                  <td className="qtc-red" onClick={() => checkQtc(115, 0.40, 554)}>554</td>
                  <td className="qtc-red" onClick={() => checkQtc(115, 0.42, 581)}>581</td>
                  <td className="qtc-red" onClick={() => checkQtc(115, 0.44, 609)}>609</td>
                  <td className="qtc-red" onClick={() => checkQtc(115, 0.46, 637)}>637</td>
                  <td className="qtc-red" onClick={() => checkQtc(115, 0.48, 665)}>665</td>
                  <td className="qtc-red" onClick={() => checkQtc(115, 0.50, 692)}>692</td>
                  <td className="qtc-red" onClick={() => checkQtc(115, 0.52, 720)}>720</td>
                  <td className="qtc-red" onClick={() => checkQtc(115, 0.54, 748)}>748</td>
                  <td className="qtc-red" onClick={() => checkQtc(115, 0.56, 775)}>775</td>
                </tr>
                <tr>
                  <th>120</th>
                  <td className="green" onClick={() => checkQtc(120, 0.28, 396)}>396</td>
                  <td className="green" onClick={() => checkQtc(120, 0.30, 424)}>424</td>
                  <td className="yellow" onClick={() => checkQtc(120, 0.32, 453)}>453</td>
                  <td className="yellow" onClick={() => checkQtc(120, 0.34, 481)}>481</td>
                  <td className="qtc-red" onClick={() => checkQtc(120, 0.36, 509)}>509</td>
                  <td className="qtc-red" onClick={() => checkQtc(120, 0.38, 537)}>537</td>
                  <td className="qtc-red" onClick={() => checkQtc(120, 0.40, 566)}>566</td>
                  <td className="qtc-red" onClick={() => checkQtc(120, 0.42, 594)}>594</td>
                  <td className="qtc-red" onClick={() => checkQtc(120, 0.44, 622)}>622</td>
                  <td className="qtc-red" onClick={() => checkQtc(120, 0.46, 651)}>651</td>
                  <td className="qtc-red" onClick={() => checkQtc(120, 0.48, 679)}>679</td>
                  <td className="qtc-red" onClick={() => checkQtc(120, 0.50, 707)}>707</td>
                  <td className="qtc-red" onClick={() => checkQtc(120, 0.52, 735)}>735</td>
                  <td className="qtc-red" onClick={() => checkQtc(120, 0.54, 764)}>764</td>
                  <td className="qtc-red" onClick={() => checkQtc(120, 0.56, 792)}>792</td>
                </tr>
                <tr>
                  <th>125</th>
                  <td className="green" onClick={() => checkQtc(125, 0.28, 404)}>404</td>
                  <td className="green" onClick={() => checkQtc(125, 0.30, 433)}>433</td>
                  <td className="yellow" onClick={() => checkQtc(125, 0.32, 462)}>462</td>
                  <td className="yellow" onClick={() => checkQtc(125, 0.34, 491)}>491</td>
                  <td className="qtc-red" onClick={() => checkQtc(125, 0.36, 520)}>520</td>
                  <td className="qtc-red" onClick={() => checkQtc(125, 0.38, 548)}>548</td>
                  <td className="qtc-red" onClick={() => checkQtc(125, 0.40, 577)}>577</td>
                  <td className="qtc-red" onClick={() => checkQtc(125, 0.42, 606)}>606</td>
                  <td className="qtc-red" onClick={() => checkQtc(125, 0.44, 635)}>635</td>
                  <td className="qtc-red" onClick={() => checkQtc(125, 0.46, 664)}>664</td>
                  <td className="qtc-red" onClick={() => checkQtc(125, 0.48, 693)}>693</td>
                  <td className="qtc-red" onClick={() => checkQtc(125, 0.50, 722)}>722</td>
                  <td className="qtc-red" onClick={() => checkQtc(125, 0.52, 751)}>751</td>
                  <td className="qtc-red" onClick={() => checkQtc(125, 0.54, 779)}>779</td>
                  <td className="qtc-red" onClick={() => checkQtc(125, 0.56, 808)}>808</td>
                </tr>
                <tr>
                  <th>130</th>
                  <td className="green" onClick={() => checkQtc(130, 0.28, 412)}>412</td>
                  <td className="green" onClick={() => checkQtc(130, 0.30, 442)}>442</td>
                  <td className="yellow" onClick={() => checkQtc(130, 0.32, 471)}>471</td>
                  <td className="qtc-red" onClick={() => checkQtc(130, 0.34, 500)}>500</td>
                  <td className="qtc-red" onClick={() => checkQtc(130, 0.36, 530)}>530</td>
                  <td className="qtc-red" onClick={() => checkQtc(130, 0.38, 559)}>559</td>
                  <td className="qtc-red" onClick={() => checkQtc(130, 0.40, 589)}>589</td>
                  <td className="qtc-red" onClick={() => checkQtc(130, 0.42, 618)}>618</td>
                  <td className="qtc-red" onClick={() => checkQtc(130, 0.44, 648)}>648</td>
                  <td className="qtc-red" onClick={() => checkQtc(130, 0.46, 677)}>677</td>
                  <td className="qtc-red" onClick={() => checkQtc(130, 0.48, 707)}>707</td>
                  <td className="qtc-red" onClick={() => checkQtc(130, 0.50, 736)}>736</td>
                  <td className="qtc-red" onClick={() => checkQtc(130, 0.52, 765)}>765</td>
                  <td className="qtc-red" onClick={() => checkQtc(130, 0.54, 795)}>795</td>
                  <td className="qtc-red" onClick={() => checkQtc(130, 0.56, 824)}>824</td>
                </tr>
                <tr>
                  <th>135</th>
                  <td className="green" onClick={() => checkQtc(135, 0.28, 420)}>420</td>
                  <td className="yellow" onClick={() => checkQtc(135, 0.30, 450)}>450</td>
                  <td className="yellow" onClick={() => checkQtc(135, 0.32, 480)}>480</td>
                  <td className="qtc-red" onClick={() => checkQtc(135, 0.34, 510)}>510</td>
                  <td className="qtc-red" onClick={() => checkQtc(135, 0.36, 540)}>540</td>
                  <td className="qtc-red" onClick={() => checkQtc(135, 0.38, 570)}>570</td>
                  <td className="qtc-red " onClick={() => checkQtc(135, 0.40, 600)}>600</td>
                  <td className="qtc-red" onClick={() => checkQtc(135, 0.42, 630)}>630</td>
                  <td className="qtc-red" onClick={() => checkQtc(135, 0.44, 660)}>660</td>
                  <td className="qtc-red" onClick={() => checkQtc(135, 0.46, 690)}>690</td>
                  <td className="qtc-red" onClick={() => checkQtc(135, 0.48, 720)}>720</td>
                  <td className="qtc-red" onClick={() => checkQtc(135, 0.50, 750)}>750</td>
                  <td className="qtc-red" onClick={() => checkQtc(135, 0.52, 780)}>780</td>
                  <td className="qtc-red" onClick={() => checkQtc(135, 0.54, 810)}>810</td>
                  <td className="qtc-red" onClick={() => checkQtc(135, 0.56, 840)}>840</td>
                </tr>
                <tr>
                  <th>140</th>
                  <td className="green" onClick={() => checkQtc(140, 0.28, 428)}>428</td>
                  <td className="yellow" onClick={() => checkQtc(140, 0.30, 458)}>458</td>
                  <td className="yellow" onClick={() => checkQtc(140, 0.32, 489)}>489</td>
                  <td className="qtc-red" onClick={() => checkQtc(140, 0.34, 519)}>519</td>
                  <td className="qtc-red" onClick={() => checkQtc(140, 0.36, 550)}>550</td>
                  <td className="qtc-red" onClick={() => checkQtc(140, 0.38, 580)}>580</td>
                  <td className="qtc-red" onClick={() => checkQtc(140, 0.40, 611)}>611</td>
                  <td className="qtc-red" onClick={() => checkQtc(140, 0.42, 642)}>642</td>
                  <td className="qtc-red" onClick={() => checkQtc(140, 0.44, 672)}>672</td>
                  <td className="qtc-red" onClick={() => checkQtc(140, 0.46, 703)}>703</td>
                  <td className="qtc-red" onClick={() => checkQtc(140, 0.48, 733)}>733</td>
                  <td className="qtc-red" onClick={() => checkQtc(140, 0.50, 764)}>764</td>
                  <td className="qtc-red" onClick={() => checkQtc(140, 0.52, 794)}>794</td>
                  <td className="qtc-red" onClick={() => checkQtc(140, 0.54, 825)}>825</td>
                  <td className="qtc-red" onClick={() => checkQtc(140, 0.56, 855)}>855</td>
                </tr>
                <tr>
                  <th>145</th>
                  <td className="green" onClick={() => checkQtc(145, 0.28, 435)}>435</td>
                  <td className="yellow" onClick={() => checkQtc(145, 0.30, 466)}>466</td>
                  <td className="yellow" onClick={() => checkQtc(145, 0.32, 497)}>497</td>
                  <td className="qtc-red" onClick={() => checkQtc(145, 0.34, 529)}>529</td>
                  <td className="qtc-red" onClick={() => checkQtc(145, 0.36, 560)}>560</td>
                  <td className="qtc-red" onClick={() => checkQtc(145, 0.38, 591)}>591</td>
                  <td className="qtc-red" onClick={() => checkQtc(145, 0.40, 622)}>622</td>
                  <td className="qtc-red" onClick={() => checkQtc(145, 0.42, 653)}>653</td>
                  <td className="qtc-red" onClick={() => checkQtc(145, 0.44, 684)}>684</td>
                  <td className="qtc-red" onClick={() => checkQtc(145, 0.46, 715)}>715</td>
                  <td className="qtc-red" onClick={() => checkQtc(145, 0.48, 746)}>746</td>
                  <td className="qtc-red" onClick={() => checkQtc(145, 0.50, 777)}>777</td>
                  <td className="qtc-red" onClick={() => checkQtc(145, 0.52, 808)}>808</td>
                  <td className="qtc-red" onClick={() => checkQtc(145, 0.54, 839)}>839</td>
                  <td className="qtc-red" onClick={() => checkQtc(145, 0.56, 871)}>871</td>
                </tr>
                <tr>
                  <th>150</th>
                  <td className="green" onClick={() => checkQtc(150, 0.28, 443)}>443</td>
                  <td className="yellow" onClick={() => checkQtc(150, 0.30, 474)}>474</td>
                  <td className="qtc-red" onClick={() => checkQtc(150, 0.32, 506)}>506</td>
                  <td className="qtc-red" onClick={() => checkQtc(150, 0.34, 538)}>538</td>
                  <td className="qtc-red" onClick={() => checkQtc(150, 0.36, 569)}>569</td>
                  <td className="qtc-red" onClick={() => checkQtc(150, 0.38, 601)}>601</td>
                  <td className="qtc-red" onClick={() => checkQtc(150, 0.40, 632)}>632</td>
                  <td className="qtc-red" onClick={() => checkQtc(150, 0.42, 664)}>664</td>
                  <td className="qtc-red" onClick={() => checkQtc(150, 0.44, 696)}>696</td>
                  <td className="qtc-red" onClick={() => checkQtc(150, 0.46, 727)}>727</td>
                  <td className="qtc-red" onClick={() => checkQtc(150, 0.48, 759)}>759</td>
                  <td className="qtc-red" onClick={() => checkQtc(150, 0.50, 791)}>791</td>
                  <td className="qtc-red" onClick={() => checkQtc(150, 0.52, 822)}>822</td>
                  <td className="qtc-red" onClick={() => checkQtc(150, 0.54, 854)}>854</td>
                  <td className="qtc-red" onClick={() => checkQtc(150, 0.56, 885)}>885</td>
                </tr>
                </tbody>
              </table> 
    );
}

export default QtcTable;
