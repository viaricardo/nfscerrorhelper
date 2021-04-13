var advertencias = { 
    "101":"CNPJ/CPF não numérico",
    "102":"IE não informada",
    "140":"Número do terminal telefônico com valor inválido diferente de LLNNNNNNNN ou LLNNNNNNNNN, ou preenchimento incorreto",
    "145":"IE não informada, inválida, ou preenchimento incorreto",
    "147":"Nome ou Razão Social inválido(a), ou preenchimento incorreto",
    "149":"Código de Identificação do consumidor ou assinante inválido",
    "154":"CNPJ numericamente inválido",
    "158":"CPF numericamente inválido",
    "233":"CFOP inválido para o código de classificação do item",
    "305":"Número deve ser numérico",
    "306":"Número não informado",
    "307":"CEP deve ser numérico",
    "308":"CEP não informado",
    "309":"Bairro não informado, inválido, ou preenchimento incorreto",
    "310":"Município não informado, inválido, ou preenchimento incorreto",
    "311":"Sigla da UF diferente da informada no arquivo mestre",
    "316":"Número do telefone de contato com valor inválido diferente de LLNNNNNNNN ou LLNNNNNNNNN, ou preenchimento incorreto",
    "318":"Número do terminal telefônico com valor inválido diferente de LLNNNNNNNN ou LLNNNNNNNNN, ou preenchimento incorreto",
    "327":"Código de identificação do consumidor ou assinante diferente do informado no arquivo mestre",
    "329":"Número do terminal telefônico, ou da instalação, diferente do informado no arquivo mestre",
    "330":"Logradouro inválido, ou preenchimento incorreto" 
}

var erros = { 
    "103":"Razão Social deve ser informada com pelo menos 3 caracteres",
    "104":"Sigla da UF inválida",
    "105":"Classe de consumo inválida (deve estar entre 1 e 8)",
    "106":"Tipo de assinante inválido (deve estar entre 1 e 6)",
    "107":"Tipo de ligação inválido (deve estar entre 1 e 3)",
    "108":"Tipo de utilização inválido (deve estar entre 1 e 6)",
    "109":"Grupo de tensão inválido (deve estar entre 01 e 14)",
    "110":"Grupo de tensão deve ser 00 para documento fiscal que não seja Conta de Energia",
    "111":"Código de Identificação do consumidor ou assinante deve ser informado",
    "112":"Dia de emissão inválido (deve estar entre 01 e 31)",
    "113":"Mês de emissão inválido (deve estar entre 01 e 12",
    "114":"Dia de emissão inválido para abril, junho, setembro ou novembro, deve ser igual ao MÊS da referência de apuração) ",
    "115":"Dia de emissão inválido para fevereiro",
    "116":"Dia de emissão inválido para fevereiro de ano não bissexto",
    "117":"Ano de emissão inválido (deve ser maior que 2003, deve ser igual ao ANO da referência de apuração) ",
    "118":"Modelo do documento inválido (deve ser 01, 06, 21 ou 22, deve ser o mesmo modelo em todas as notas fiscais do arquivo) ",
    "119":"Série diferente da informada na composição do nome do arquivo",
    "120":"Número do documento fiscal não numérico, ou inválido",
    "121":"Número do documento fiscal fora de seqüência",
    "122":"Código de Autenticação Digital do documento fiscal inválido",
    "123":"Valor Total deve ser numérico",
    "124":"BC ICMS deve ser numérico",
    "125":"ICMS deve ser numérico",
    "126":"Campo Isentas ou NT deve ser numérico",
    "127":"Campo Outros deve ser numérico",
    "128":"Situação do documento inválido (deve ser S, N ou R, a partir da ref. 1701, deve ser S, N, R ou C, em letras maiúsculas) ",
    "129":"Mês de apuração inválido (tem que estar entre 01 e 12)",
    "130":"Mês de apuração diferente do informado na composição do nome do arquivo",
    "131":"Ano de apuração inválido (deve ser maior que 2003)",
    "132":"Ano de apuração diferente do informado na composição do nome do arquivo",
    "133":"Referência ao item deve ser numérico",
    "134":"Referência ao item da NF não aponta para item com mesmo número da NF",
    "135":"Referência ao item da NF não aponta para o primeiro item da NF",
    "136":"Código Autenticação Digital do registro do arquivo mestre inválido",
    "137":"Referência ao item maior que a quantidade de itens existente no arquivo de itens",
    "138":"Referência ao item aponta para um registro do arquivo item que não existe",
    "139":"Final do registro com seqüência inválida (diferente de CR + LF)",
    "141":"Número do terminal telefônico com valor inválido diferente de LLNNNNNNNN ou LLNNNNNNNNN, ou preenchimento incorreto",
    "142":"Brancos com valor inválido diferente de brancos, ES, NI ou BC para NFCEE modelo 06",
    "143":"Número da instalação (NFCEE modelo 06) não-informado, inválido, ou preenchimento incorreto",
    "144":"CNPJ/CPF não numérico",
    "146":"IE não informada, inválida, ou preenchimento incorreto",
    "148":"Nome ou Razão Social inválido(a), ou preenchimento incorreto",
    "150":"Código de Identificação do consumidor ou assinante inválido",
    "151":"Data de emissão inválida (não pode ser futura)",
    "152":"Série inválida ( não pode iniciar com espaço em branco)",
    "153":"CNPJ não informado",
    "155":"CNPJ numericamente inválido",
    "156":"CPF não informado",
    "157":"CPF não está alinhado à direita",
    "159":"CPF numericamente inválido",
    "160":"CNPJ: preencher com zeros para Pessoa jurídica não obrigada à inscrição no CNPJ",
    "161":"CPF: preencher com zeros para Pessoa física não obrigada à inscrição no CPF",
    "162":"Tipo de assinante inválido (deve ser 0 a partir da referência 1701)",
    "163":"Modelo do documento inválido (deve ser 01, 06, 21, ou 22, deve ser o mesmo modelo em todas as notas fiscais do arquivo) ",
    "164":"Modelo do documento inválido: deve ser o mesmo modelo em todas as notas fiscais do arquivo)",
    "165":"Tipo de informação inválido (deve estar entre 1 e 4)",
    "166":"Tipo de Cliente inválido (Consulte a tabela de Tipo de Cliente - Energia Elétrica)",
    "167":"Tipo de Cliente inválido (Consulte a tabela de Tipo de Cliente - Serviços de Comunicação)",
    "168":"Tipo de Cliente inválido (Consulte a tabela de Tipo de Cliente - Gás Canalizado)",
    "169":"Subclasse de Fornecimento inválida para a classe Comercial (Consulte a Tabela de Subclasses de Fornecimento)",
    "170":"Subclasse de Fornecimento inválida para a classe Consumo Próprio (Consulte a Tabela de Subclasses de Fornecimento)",
    "171":"Subclasse de Fornecimento inválida para a classe Iluminação Pública (Consulte a Tabela de Subclasses de Fornecimento)",
    "172":"Subclasse de Fornecimento inválida para a classe Industrial (Consulte a Tabela de Subclasses de Fornecimento)",
    "173":"Subclasse de Fornecimento inválida para a classe Poder Público (Consulte a Tabela de Subclasses de Fornecimento)",
    "174":"Subclasse de Fornecimento inválida para a classe Residencial (Consulte a Tabela de Subclasses de Fornecimento)",
    "175":"Subclasse de Fornecimento inválida para a classe Rural (Consulte a Tabela de Subclasses de Fornecimento)",
    "176":"Subclasse de Fornecimento inválida para a classe Serviço Público (Consulte a Tabela de Subclasses de Fornecimento)",
    "177":"Subclasse de Fornecimento deve ser 00 para documento fiscal que não seja Conta de Energia Elétrica",
    "178":"Número do Terminal Telefônico Principal com valor inválido diferente de LLNNNNNNNN ou LLNNNNNNNNN, ou preenchim. incorreto",
    "179":"Número do Terminal Telefônico Principal: informar somente para nota fiscal de modelo 21 ou 22",
    "180":"CNPJ diferente do informado no nome do arquivo",
    "181":"Número ou Código da Fatura Comercial inválido ( não pode iniciar com espaço em branco, nem ser igual ao número da Nota Fiscal)",
    "182":"Valor Total da Fatura Comercial deve ser numérico",
    "183":"Data de Leitura Anterior: ano menor que 2003, ou é posterior à Data de Emissão, ou é inválida)",
    "184":"Data de Leitura Atual: ano menor que 2003, ou é posterior à de Emissão, ou incompatível com a de leitura anterior, ou é inválida)",
    "185":"Campo 32 é reservado: preencher com espaços em branco",
    "186":"Campo 33 é reservado: preencher com zeros",
    "187":"Informações Adicionais: não pode iniciar com espaço em branco, vide regras no item 5.2.5.10 do Convênio ",
    "188":"Situação do documento inválida (nota fiscal Complementar não é admitida pela UF do Contribuinte, ou do Destinatário/Tomador)",
    "189":"Tipo de utilização do registro Mestre não foi informado em nenhum dos itens do documento fiscal",
    "190":"Classe de consumo inválida (deve ser 1 para Gás Canalizado)",
    "191":"Fase ou Tipo de Ligação inválido (deve ser 1 para Gás Canalizado)",
    "192":"Modelo do documento inválido (deve ser 06, 21, 22 ou 28, deve ser o mesmo modelo em todas as notas fiscais do arquivo) ",
    "193":"Data de Leitura Anterior: preencher com zeros, para documento fiscal que não seja Conta de Energia Elétrica",
    "194":"Data de Leitura Atual: preencher com zeros, para documento fiscal que não seja Conta de Energia Elétrica",
    "195":"Informar o Número do Terminal Telefônico, no formato LLNNNNNNNN ou LLNNNNNNNNN",
    "201":"CNPJ/CPF diferente do informado no arquivo mestre",
    "202":"Sigla da UF diferente do informado no arquivo mestre",
    "203":"Classe de consumo ou Tipo de assinante diferente do informado no mestre",
    "204":"Fase ou Tipo de Utilização diferente do informado no arquivo mestre",
    "205":"Grupo de Tensão diferente do informado no arquivo mestre",
    "206":"Data de emissão diferente do informado no arquivo mestre",
    "207":"Modelo diferente do informado no arquivo mestre",
    "208":"Série diferente do informado no arquivo mestre",
    "209":"Número do documento fiscal diferente do informado no arquivo mestre",
    "210":"CFOP deve ser numérico",
    "211":"Número do Item deve ser numérico",
    "212":"Número do Item inválido (deve estar entre 001 e 990)",
    "213":"Número do Item fora de seqüência",
    "214":"Descrição do serviço/produto não informado, ou preenchimento incorreto",
    "215":"Código de classificação do item inválido",
    "216":"Quantidade contratada deve ser numérica",
    "217":"Quantidade fornecida ou prestada deve ser numérica",
    "218":"Valor Total deve ser numérico",
    "219":"Campo Desconto/Redutores deve ser numérico",
    "220":"Campo Acréscimos e Despesas Acessórias deve ser numérico",
    "221":"BC ICMS deve ser numérica",
    "222":"ICMS deve ser numérico",
    "223":"Campo Isentas ou NT deve ser numérico",
    "224":"Campo Outros deve ser numérico",
    "225":"Alíquota do ICMS deve ser numérica",
    "226":"Alíquota do ICMS deve ser 0000 (0%) ou maior que 0100 (1%)",
    "227":"Situação do item inválido (deve ser S ou N)",
    "228":"Situação do item divergente da situação informada no Mestre",
    "229":"Mês de apuração diferente do informado no Mestre",
    "230":"Ano de apuração diferente do informado no Mestre",
    "231":"Código Autenticação Digital do registro do arquivo item inválido",
    "232":"Final do registro com seqüência inválida (diferente de CR + LF)",
    "234":"Registro de item órfão não pertence a nenhum mestre",
    "235":"Item do grupo 08 ou 09 deve ter CFOP=0000, e CFOP=0000 somente para Item do grupo 08 ou 09",
    "236":"Não é permitido a existência de item com CFOP de entrada em arquivo de saída",
    "237":"Não é permitida a existência de item com CFOP de saída em arquivo de entrada",
    "238":"Número do contrato: informar somente para nota fiscal de modelo 21 ou 22, não iniciar com espaço ",
    "239":"Quantidade faturada deve ser numérica",
    "240":"Tarifa Aplicada: deve ser numérica, informar somente para nota fiscal de modelo 06, 01 ou 28 ",
    "241":"Alíquota do PIS/PASEP deve ser numérica",
    "242":"Valor do PIS/PASEP deve ser numérico",
    "243":"Alíquota da COFINS deve ser numérica",
    "244":"Valor da COFINS deve ser numérico",
    "245":"Indicador de Desconto Judicial: quando informado, o valor deve ser J",
    "246":"Tipo de Isenção/Redução inválido (Consulte a tabela de Tipo de Isenção/Redução de Base de Cálculo)",
    "247":"Tipo de Isenção/Redução inválido (para Energia ou Gás Canalizado, o valor deve ser 00)",
    "248":"Item com CFOP=0000 não pode conter valor diferente de zero nos campos BC, Isentas, ou ICMS",
    "249":"Campo Desconto/Redutores deve conter zeros a partir da referência 1701",
    "250":"Campo Acréscimos e Despesas Acessórias deve conter zeros a partir da referência 1701",
    "251":"Código do Item: se informado, não iniciar com espaço",
    "252":"Total deve ser igual a Outros, quando CFOP=0000",
    "253":"Total deve ser igual a Outros, para Item do grupo 08 ou 09",
    "254":"Total deve ser igual à soma: BC + Isentas + Outros",
    "255":"Total não pode ser negativo, para Item do grupo 08",
    "256":"Total não pode ser positivo, para Item do grupo 09",
    "257":"Código de classificação do item inválido para Gás Canalizado",
    "258":"Código de classificação do item inválido para Energia Elétrica",
    "259":"Código de classificação do item inválido para (Tele)Comunicações",
    "260":"Tipo de Utilização do item é incompatível com o Código de classificação do item",
    "261":"Tipo de utilização inválido (deve estar entre 1 e 6)",
    "262":"Unidade de Medida: não iniciar com espaço em branco",
    "301":"CNPJ/CPF diferente do informado no arquivo mestre",
    "302":"IE diferente do informado no arquivo mestre",
    "303":"Razão Social diferente do informado no arquivo mestre",
    "304":"Logradouro inválido: preenchimento incorreto, ou contém menos de 3 caracteres",
    "312":"Código de identificação do cliente ou assinante não informado",
    "313":"Sigla da UF de habilitação do terminal telefônico inválida",
    "314":"Código Autenticação Digital do registro do arquivo Cadastro inválido",
    "315":"Final do registro com seqüência inválida (diferente de CR + LF)",
    "317":"Número do telefone de contato com valor inválido diferente de LLNNNNNNNN ou LLNNNNNNNNN, ou preenchimento incorreto",
    "319":"Número do terminal telefônico com valor inválido diferente de LLNNNNNNNN ou LLNNNNNNNNN, ou preenchimento incorreto",
    "320":"Código de identificação do consumidor ou assinante diferente do informado no arquivo mestre",
    "321":"Número do terminal telefônico, ou da instalação, diferente do informado no arquivo mestre",
    "322":"Número deve ser numérico",
    "323":"CEP deve ser numérico",
    "324":"Bairro inválido, ou preenchimento incorreto",
    "325":"Município não informado, inválido, ou preenchimento incorreto",
    "326":"Sigla da UF diferente da informada no arquivo mestre",
    "328":"Código de identificação do consumidor ou assinante diferente do informado no arquivo mestre",
    "331":"Logradouro inválido, ou preenchimento incorreto, informe o Tipo e o Nome ",
    "332":"Data de emissão diferente do informado no arquivo mestre",
    "333":"Modelo diferente do informado no arquivo mestre",
    "334":"Série diferente da informada no arquivo mestre",
    "335":"Número do documento fiscal diferente do informado no arquivo mestre",
    "336":"Código do Município deve ser numérico",
    "337":"Código do Município não consta na tabela do IBGE",
    "338":"Código do Município não corresponde à UF do destinatário",
    "339":"Código do Município inválido para a data de emissão da nota fiscal",
    "340":"Nome do Município não consta, ou não coincide com a tabela do IBGE",
    "341":"Complemento do endereço: não pode iniciar com espaço em branco",
    "401":"Quantidade de Registros do arquivo item menor que quantidade de registro do arquivo mestre",
    "402":"Divergência entre o valor total do registro mestre e somatório de valor + Acréscimo - Desconto dos itens",
    "403":"Divergência entre o BC do registro mestre e somatório de BC dos itens",
    "404":"Divergência entre o ICMS do registro mestre e somatório de ICMS dos itens",
    "405":"Divergência entre o Isentos e NT do registro mestre e somatório de Isentos e NT dos itens",
    "406":"Divergência entre o Outros do registro mestre e somatório de Outros dos itens",
    "407":"Divergência entre o somatório de valor total do arquivo mestre e arquivo item",
    "408":"Divergência entre o somatório de BC do arquivo mestre e arquivo item",
    "409":"Divergência entre o somatório de ICMS do arquivo mestre e arquivo item",
    "410":"Divergência entre o somatório de Isentos e NT do arquivo mestre e arquivo item",
    "411":"Divergência entre o somatório de Outros do arquivo mestre e arquivo item",
    "412":"Quantidade de registros do arquivo cadastro diferente da quantidade de registros do arquivo mestre",
    "413":"A série utilizada na formação do nome do arquivo é inválida",
    "414":"Ano de referência utilizado na formação do nome do arquivo inválido",
    "415":"Mês de referência utilizado na formação do nome do arquivo inválido",
    "416":"Identificador do Status utilizado na formação do nome do arquivo inválido",
    "417":"Número da 1ª Nota Fiscal do arquivo mestre inválido",
    "418":"Número da última Nota Fiscal do arquivo mestre inválido",
    "419":"Existem ítens que não são referenciados por Notas Fiscais",
    "420":"M Registro Mestre com caracteres inválidos ( posições 0 a 31 da tabela ASCII)",
    "421":"I Registro Item com caracteres inválidos ( posições 0 a 31 da tabela ASCII)",
    "422":"D Registro Destinatário com caracteres inválidos ( posições 0 a 31 da tabela ASCII)",
    "423":"I Total, BC, Isentas, Outros e ICMS devem ter todos o mesmo sinal: positivo ou negativo",
    "424":"I BC, Isentas, ICMS e Aliq_ICMS devem ser iguais a zero quando CFOP=0000",
    "425":"I BC, Isentas, ICMS e Aliq_ICMS devem ser iguais a zero quando o Item é do grupo 08 ou 09",
    "426":"I BC, Isentas, ICMS e Aliq_ICMS devem ser iguais a zero quando o valor de Outros é informado",
    "427":"I BC e Aliq_ICMS devem ser diferentes de zero, e Outros deve ser igual a zero, quando ICMS é informado"
}

function getArrayLinesFromTextArea(element) {
    var obj = document.getElementById(element);
    if (element === undefined) { 
        //go horse
        return;
    } else  {
        var lines = obj.value.replace(/\r\n/g,"\n").split("\n");
        return lines;
    }
}

var lastNF="";
function getTableLine(type, code, nf, data) {
    var tableClass="";
    var typeDesc = ""
    var desc = "";
    var separator = "";
    if (lastNF != nf) {
        separator = ' \
                    <tr> \
                    <td> \
                        &nbsp \
                    </td> \
                    <td> \
                         \
                    </td> \
                    <td> \
                         \
                    </td> \
                    <td> \
                         \
                    </td> \
                </tr>';
    }
    if (type=="E") { 
        tableClass="table-danger"; 
        typeDesc = "Erro";
        desc = erros[code];
    }
    if (type=="A") { 
        tableClass="table-warning"; 
        typeDesc = "Advert&ecirc;ncia";
        desc = advertencias[code];
    }
    
    var ret = separator + ' \
						<tr class="' + tableClass + '"> \
						<td> \
							' + nf + ' \
						</td> \
						<td> \
							' + typeDesc + ' \
						</td> \
						<td> \
							' + desc + ' \
						</td> \
						<td> \
							' + data + ' \
						</td> \
					</tr>';
    lastNF = nf;
    return ret;
}

function process() {
    var content = getArrayLinesFromTextArea("log");
    var max = content.length;
    var t = 0;
    var tcontent = "";
    for (t=0;t<max;t++) {
        line = content[t].split(";");
        if (line.length > 5) {
            type = line[1];
            code = line[3];
            if (line.length == 6) {
                data = line[4];
                nf = line[5];
            }
            if (line.length == 7) {
                data = line[4] + " <-> " + line[5];
                nf = line[6];
            }            
            tcontent = tcontent + getTableLine(type, code, nf, data);
        }
    }
    document.getElementById("results").innerHTML = tcontent;
}

function cleanup() { 
    var content = document.getElementById("log");
    var tcontent = document.getElementById("results");
    content.value="";
    tcontent.innerHTML = "";
}
