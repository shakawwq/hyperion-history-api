const chain_prefix = process.env.CHAIN;

const delta_blacklist = new Set([

]);

const action_blacklist = new Set([
    chain_prefix + '::eosio::onblock',
    'eos::lelego.x::msg',
    'eos::blocktwitter::tweet',
    'eos::gu2tembqgage::ddos',
    'eos::lelego.x::llg',
    'eos::lelego.x::invite',
    'eos::lelego.x::tip',
    'eos::lelego.x::game',
    'eos::lelego.x::info',
    'eos::lelego.x::news',
    'eos::gameboylucky::enjoygame',
    'eos::gameboylucky::playgame',
    'eos::wizznetwork1::broadcast',
    'eos::yumgamealert::push',
    'eos::betdicealert::broadcast',
    'eos::betdicealert::push',
    'eos::alert.x::news',
    'eos::2g1com.x::transfer',
    'eos::2g1com.x::broadcast',
    'eos::contractbase::n',
    'eos::contractbase::u',
    'eos::contractbase::u',
    'eos::contractbase::news',
    'eos::contractbase::info',
    'eos::contractbase::msg',
    'eos::contractbase::m',
    'eos::contractbase::i',
    'eos::contractbase::o',
    'eos::contractbase::n',
    'eos::contractbase::u',
    'eos::message.bank::m',
    'eos::message.bank::to',
    'eos::message.bank::i',
    'eos::message.bank::news',
    'eos::message.bank::on',
    'eos::message.bank::go',
    'eos::message.bank::sz',
    'eos::eoswin.com::news',
    'eos::candy.pra::broadcast',
    'eos::eosjackscool::invite',
    'eos::eosjackscool::hi',
    'eos::news.x::news1113',
    'eos::news.x::topnews',
    'eos::experimentms::msg',
    'eos::bingobetserv::notify',
    'eos::eospromoter1::promote',
    'eos::goldioioioio::sendmessage',
    'eos::goldioioioio::issuefrost',
    'eos::eospromotera::promote',
    'eos::watchdoggiee::ping',
    'eos::ecafofficiel::arbitration',
    'eos::eoseosaddddd::eosabcd',
    'eos::1hello1world::hi',
    'eos::myeosgateway::notify',
    'eos::imfatfishman::recruit',
    'eos::eosplayaloud::yell'
]);

module.exports = {
    action_blacklist,
    delta_blacklist
};