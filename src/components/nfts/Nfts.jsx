import React, {useEffect, useState} from 'react'
import './nfts.css'
import {Link} from 'react-router-dom';
import {HashLoader, SyncLoader} from "react-spinners";
import {ethers} from "ethers";
import {useMarketContract} from "../../hooks/useMarketContract";
import {useContractKit} from "@celo-tools/use-contractkit";

const Nfts = ({title, nfts, loading, relist}) => {
    console.log({nfts})

    return (
        <div className='bids section__padding'>
            <div className="bids-container">
                <div className="bids-container-text">
                    {!loading && <h1>{nfts.length < 1 ? "No NFTs here, mate :)" : title}</h1>}

                </div>
                <div className="bids-container-card">

                    {loading && <><HashLoader color={"red"} size={200} /><p className='pih'>CONNECT WALLET ! </p></> }
                    

                    {nfts.map((nft) => (<Link to={ !relist ? `/nft/${nft.tokenId}` : `/nft/${nft.tokenId}/relist`}>
                            <div className="card-column cursor-pointer">
                                <div className="bids-card">
                                    <div className="bids-card-top">
                                        <div className="bids-card-topz" >
                                           <img src={nft.image} alt=""/>
                                        </div>
                                        <p className="bids-title">{nft.name}</p>

                                    </div>
                                    <div className="bids-card-bottom">
                                        <p>{nft.price} <span>cUsd</span></p>


                                         </div>


                                </div>


                           <div>


                           </div>
                            </div>
                        </Link>
                    ))}


                </div>
            </div>

        </div>
    )
}

export default Nfts
