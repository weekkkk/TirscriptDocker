import VariableType from '../../../../Database/Models/VariableType';

export default class EditSettingsRequest  {
	SettingId: number = 0;
	Type: VariableType = null;
	Key?: string = '';
	Value?: string = '';
	constructor(obj?: Partial<EditSettingsRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
