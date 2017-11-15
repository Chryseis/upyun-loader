import path from 'path';
import loaderUtils from 'loader-utils';
import validateOptions from 'schema-utils'

export default function loader(content) {
    if (!this.emitFile) throw new Error('Upyun Loader\n\nemitFile is required from module system');

    const options = loaderUtils.getOptions(this) || {};

    validateOptions(schema, options, 'Upyun Loader');

    const context = options.context || this.options.context;

    let url = loaderUtils.interpolateName(this, options.name, {
        context,
        content,
        regExp: options.regExp,
    });
}

export const raw = true;