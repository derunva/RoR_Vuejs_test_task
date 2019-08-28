class NameValidator < ActiveModel::Validator
  def validate(record)
    field_val = record[options[:field_name].to_sym]
    if field_val.nil? || field_val.empty?
      return record.errors.add options[:field_name].to_sym, "поле не може бути порожнім, відсутнім"
    end
    words = field_val.split(" ")
    if words.length < 2
      record.errors.add options[:field_name].to_sym, "мінімум два слова"
    end
    words.each  do |word|
      if word.length < 2
        record.errors.add options[:field_name].to_sym, "cлова мають бути мінімум дві літери"
      end
    end
    if !field_val.include? "."
      record.errors.add options[:field_name].to_sym, "має включати ‘.’"
    end
  end
end