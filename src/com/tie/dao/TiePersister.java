/**
 * 
 */
package com.tie.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

/**
 * @author awang Holding all connection information Control all other daos 15
 *         attributes one for each DAO Attributes for the connection info 15
 *         helpers one for each table COnnections prop
 */
public class TiePersister {

	TieAppDao tieAppDao;
	LoginDao loginDao;
	TieMsgDao tieMsgDao;
	TieUserDao tieUserDao;
	TieDocDao tieDocDao;
	TieMsgReceiverDao tieMsgReceiverDao;
	TieEntityDao tieEntityDao;
	CbcrTable1Dao cbcrTable1Dao;
	CbcrTable2Dao cbcrTable2Dao;
	CbcrTable3Dao cbcrTable3Dao;
	
	
	public CbcrTable3Dao getCbcrTable3Dao() {
		return cbcrTable3Dao;
	}

	public void setCbcrTable3Dao(CbcrTable3Dao cbcrTable3Dao) {
		this.cbcrTable3Dao = cbcrTable3Dao;
	}

	public CbcrTable2Dao getCbcrTable2Dao() {
		return cbcrTable2Dao;
	}

	public void setCbcrTable2Dao(CbcrTable2Dao cbcrTable2Dao) {
		this.cbcrTable2Dao = cbcrTable2Dao;
	}

	public CbcrTable1Dao getCbcrTable1Dao() {
		return cbcrTable1Dao;
	}

	public void setCbcrTable1Dao(CbcrTable1Dao cbcrTable1Dao) {
		this.cbcrTable1Dao = cbcrTable1Dao;
	}

	public TieMsgReceiverDao getTieMsgReceiverDao() {
		return tieMsgReceiverDao;
	}

	public void setTieMsgReceiverDao(TieMsgReceiverDao tieMsgReceiverDao) {
		this.tieMsgReceiverDao = tieMsgReceiverDao;
	}

	public TieDocDao getTieDocDao() {
		return tieDocDao;
	}

	public void setTieDocDao(TieDocDao tieDocDao) {
		this.tieDocDao = tieDocDao;
	}

	public TieMsgDao getTieMsgDao() {
		return tieMsgDao;
	}

	public void setTieMsgDao(TieMsgDao tieMsgDao) {
		this.tieMsgDao = tieMsgDao;
	}

	public TieUserDao getTieUserDao() {
		return tieUserDao;
	}

	public void setTieUserDao(TieUserDao tieUserDao) {
		this.tieUserDao = tieUserDao;
	}

	public TiePersister() {
		// super();
		// this.tieAppDao = tieAppDao;
		init();
	}

	public void init() {
		// BaseDao basedao = new BaseDao();
		tieAppDao = new TieAppDao();
		loginDao = new LoginDao();
		tieMsgDao = new TieMsgDao();
		tieUserDao = new TieUserDao();
		tieDocDao = new TieDocDao();
		tieMsgReceiverDao = new TieMsgReceiverDao();
		tieEntityDao = new TieEntityDao();
		cbcrTable1Dao = new CbcrTable1Dao();
		cbcrTable2Dao = new CbcrTable2Dao();
		cbcrTable3Dao = new CbcrTable3Dao();
	}

	public void setTieAppDao(TieAppDao tieAppDao) {
		this.tieAppDao = tieAppDao;
	}

	public TieEntityDao getTieEntityDao() {
		return tieEntityDao;
	}

	public void setTieEntityDao(TieEntityDao tieEntityDao) {
		this.tieEntityDao = tieEntityDao;
	}

	public TieAppDao getTieAppDao() {
		return new TieAppDao();
	}

	public LoginDao getLoginDao() {
		return new LoginDao();
	}
}
