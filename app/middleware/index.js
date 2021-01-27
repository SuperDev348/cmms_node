const  jsonwebtoken =require('jsonwebtoken');
const Config =require('../../config/config');

const { secretKey } = Config;

const authenticate = (req, res, next) => {
	const token = req.headers.authorization || '';
	jsonwebtoken.verify(token, secretKey, (error, decoded) => {		
		if (error) {
			res.status(401).json({ msg: "JWT token varified failed!", data:null});
			// next({ error: 'token varified failed' });
		} else {
			const { expiredAt } = decoded;		
			if (expiredAt > new Date().getTime()) {
				next();
			} else {
				res.status(401).json({msg: "JWT token expired!", data:null});
				// next({ error: 'token expired' });
			}
		}
	});
};

const authError = (err, req, res, next) => {
	res.json(err);
};
module.exports={ authenticate, authError };
