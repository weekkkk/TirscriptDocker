import VariableType from '../../Database/Models/VariableType';

export default class SettingsResponse  {
	SettingsId: number = 0;
	ReleaseServerId: number = 0;
	Type: VariableType = null;
	Key?: string = '';
	Value?: string = '';
	constructor(obj?: Partial<SettingsResponse>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
