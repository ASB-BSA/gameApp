const componentClassName = (defaultClassName: string, addClassName?: string | false): string => {
  return addClassName ? `${defaultClassName} ${addClassName}` : defaultClassName;
}

export default componentClassName;