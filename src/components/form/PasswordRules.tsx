import { CheckCircle } from "lucide-react";

type RulesProps = {
    length: boolean;
    upper: boolean;
    number: boolean;
    special: boolean;
};

const RuleItem = ({ label, valid }: { label: string; valid: boolean }) => {
return (
    <div className="flex items-center gap-2 text-sm">
        {valid ? (
            <CheckCircle className="text-success-500" size={18} />
        ) : (
            <CheckCircle className="text-gray-400" size={18} />
        )}
        <span className={valid ? "text-success-600" : "text-gray-600"}>{label}</span>
    </div>
    );
};

const PasswordRules = ({ length, upper, number, special }: RulesProps) => {
return (
    <div className="space-y-1 mt-2">
        <RuleItem label="8 أحرف على الأقل" valid={length} />
        <RuleItem label="حرف كبير واحد" valid={upper} />
        <RuleItem label="رقم واحد" valid={number} />
        <RuleItem label="رمز خاص" valid={special} />
    </div>
    );
};

export default PasswordRules;
