const mongoose = require('mongoose');
const unique = require('mongoose-unique-validator');
const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
//Define a schema
const Schema = mongoose.Schema;

const SmsAuditPlanSchema = new Schema({
	strInternalSmsAuditPlan: {
		type: String,
	},
	aDate: {
		type: Date
	},
	aOpenMeetingBegin: {
		type: Date
	},
	aOpenMeetingClose: {
		type: Date
	},
	aOpenMeetingPresent: {
		type: Date
	},
	strOpenMeetingDetails: {
		type: String
	},
	aConductAuditBegin: {
		type: Date
	},
	aConductAuditClose: {
		type: Date
	},
	strConductAuditDetail: {
		type: String
	},
	aCloseMeetingBegin: {
		type: Date
	},
	aCloseMeetingClose: {
		type: Date
	},
	aCloseMeetingPresent: {
		type: Date
	},
	strCloseMeetingDetails: {
		type: String
	},
});

const SmsAuditInspection = new Schema({
	strICRNumber: {
		type: String
	},
	strSystem: {
		type: String
	},
	strSubSystem: {
		type: String
	},
	strAuthorizedInspection: {
		type: String
	},
	strInspectionFrequency: {
		type: String
	},
	strInspectionCriteria: {
		type: String
	},
	strDeficiencyAction: {
		type: String
	}
});

const SmsAuditReportSchema = new Schema({
	strInternalSmsAuditReport: {
		type: String
	},
	aDate: {
		type: Date
	},
	strNCRCARNo: {
		type: String
	},
	strNCStatement: {
		type: String
	},
	strImmediateAction: {
		type: String
	},
	aImmediateCompletionDate: {
		type: Date
	},
	strFurtherAction: {
		type: String
	},
	aFurtherCompletionDate: {
		type: Date
	},
	strFollowUpDetail: {
		type: String
	},
	strCorrectiveAction: {
		type: String
	}
});

const NCRCARSchema = new Schema ({
	strNCRPersonName: {
		type: String
	},
	aReportDate: {
		type: Date
	},
	strNCState: {
		type: String
	},
	strISMPart: {
		type: String
	},
	strSMSPart: {
		type: String
	},
	strCorrectiveAction: {
		type: String
	},
	strImmediateAction: {
		type: String
	},
	strImmediatePersonName: {
		type: String
	},
	aImmediateCompetionDate: {
		type: Date
	},
	strFurtherAction: {
		type: String
	},
	strFurtherPersonName: {
		type: String
	},
	aFurtherCompetionDate: {
		type: Date
	},
	strVerificationCorrectiveAction: {
		type: String
	},
	strFollowUpDetail: {
		type: String
	},
	strCorrectiveActionClose: {
		type: String
	}
});

const AuditSchema = new Schema({
	strCode: {
		type: String,
		trim: true,
		unique: true,
		required: [true, 'strCode is required.'],
	},
	strTitle: {
		type: String
	},
	strStatus: {
		type: String
	},
	strDepartmentVessel: {
		type: String
	},
	strAuditor: {
		type: String
	},
	strAuditee: {
		type: String
	},
	strISMReference: {
		type: String
	},
	strSMSReference: {
		type: String
    },
    bolScheduledAuditStatus: {
		type: Boolean
	},
	aSmsAuditPlan: {
		type: SmsAuditPlanSchema
	},
	aSmsAuditInspection: [{
		type: SmsAuditInspection
	}],
	aSmsAuditReport: {
		type: SmsAuditReportSchema
	},
	aNCRCAR: {
		type: NCRCARSchema
	}
});
AuditSchema.plugin(autoIncrement.plugin, 'ScheduledAudit');
AuditSchema.plugin(unique, { message: 'That {PATH} is already taken.' });
module.exports = mongoose.model('ScheduledAudit', AuditSchema)