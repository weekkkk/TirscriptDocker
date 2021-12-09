

export default class RemoveSettingsRequest  {
	SettingId: number = 0;
	constructor(obj?: Partial<RemoveSettingsRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
