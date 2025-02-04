import {getPage} from './page-utils';

export const createFileDataTransfer = async (fileName: string, fileContent: string) => {
    return await getPage().evaluateHandle(
        ({content, name}) => {
            const dt = new DataTransfer();
            const file = new File([content], name, {type: 'text/plain'});
            dt.items.add(file);
            return dt;
        },
        {content: fileContent, name: fileName}
    );
};
